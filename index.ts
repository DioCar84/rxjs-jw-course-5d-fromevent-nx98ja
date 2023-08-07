import { fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

// const subscrition = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
//   (event) => console.log(event.type, event.x, event.y)
// );

setTimeout(() => {
  console.log('Unsubscribe');
  subscrition.unsubscribe();
}, 5000);

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
  const clickHandlerFn = (event) => {
    console.log('Event callback executed');
    subscriber.next(event);
  };

  triggerButton.addEventListener('click', clickHandlerFn);

  return () => {
    triggerButton.removeEventListener('click', clickHandlerFn);
  };
});

const subscrition = triggerClick$.subscribe((event) =>
  console.log(event.type, event.x, event.y)
);
