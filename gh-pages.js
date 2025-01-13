import { publish } from 'gh-pages';

publish(
  'build',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Published!');
    }
  }
);
