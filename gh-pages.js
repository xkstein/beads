import { publish } from 'gh-pages';

publish(
  'build',
  {
    dotfiles: true
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Published!');
    }
  }
);
