# API Automation Framework

This project is an API automation framework using SuperTest, Mocha, and Chai. It is designed to test RESTful APIs efficiently.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd api-automation-framework
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   BASE_URL=https://jsonplaceholder.typicode.com
   ```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute the test suite using Mocha and generate a report using Mochawesome.

## Test Reports

Test reports are generated in the `mochawesome-report` directory. You can view the HTML report by opening `mochawesome.html` in a web browser.

## Continuous Integration

This project uses GitHub Actions for continuous integration. The CI workflow is defined in the `.github/workflows/ci.yml` file and runs tests on each commit or pull request to the `main` branch.

## Linting and Formatting

To check for linting issues, run:

```bash
npm run lint
```

To automatically fix linting issues, run:

```bash
npm run lint -- --fix
```

To format the code, run:

```bash
npm run format
```

## Contributing

Feel free to submit issues or pull requests if you have any improvements or bug fixes.

## License

This project is licensed under the ISC License.
