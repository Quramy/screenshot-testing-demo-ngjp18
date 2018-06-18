# Screenshot testing demonstration for ng-japan 2018

It's the demonstration repository for https://speakerdeck.com/quramy/screenshot-testing-with-angular?slide=1.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## What is the difference in Jest's image snapshot feature?
The image snapshot is a great feature too.

With that in mind, I think there're the following differences:

### Jest Image snapshot

- Pros:
  - It is simple and easy to install.
  - User can test their screenshot with other Jest features(CLI, coverage, and so on).
- Cons:
  - Especially Angular users need to install Jest(I think they use Karma/Jasmine for testing platform)
  - When screenshot changes, developer should push images with after `--update`. It means that the images are rendered at each developer's machine and there is a risk that the images will change depending on the environment he uses(e.g. Windows or macOS or installed fonts, etc...)


### SCS(storybook-chrome-screenshot) and reg-suit

- Pros:
  - reg-suit uses external cloud to store snapshot images. And it's designed to generate all images in CI service(not developer's machine).
  - Developers don't need to push/pull images binary data.
- Cons:
  - User should prepare external storage and tell the key pair(e.g. AWS credential info) to his or her CI service.
  - SCS can't correct coverage of stories. If you want coverage, you should run some measurements tool like Storyshots.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run storybook

Run `yarn storybook`

## Run screenshot

Run `yarn screenshot`

## Regression report example

See https://github.com/Quramy/screenshot-testing-demo-ngjp18/pull/2#issuecomment-397730565
