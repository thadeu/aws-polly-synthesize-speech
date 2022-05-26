# Serverless AWS Polly Synthesize Speech

This project uses an AWS Polly to convert text into mp3.

## Resources dependencies

- Serverless 3.x
- Node.js >= 14.17
- AWS Polly
- Typescript
- Crypto#randomUUID
- [Lambda Function URL](https://www.serverless.com/blog/aws-lambda-function-urls-with-serverless-framework)

## Developer Dependencies

- Webpack + ESBuild compiler
- Prettier
- ESLint
- FNM to manager node.js versions
- EditorConfig

## How to use?

First, configure your AWS Account and then running `yarn install` to install dependencies. Next, make deploy using Serverless Application as `npx sls deploy -s dev` for example.

A Lambda Function URL will generate, and access url `https://{url}/?text=hello world`. After convert text, file will downloaded automatically.

# Contributing

Once you've made your great commits (include tests, please):

1. Fork this repository
2. Create a topic branch - `git checkout -b my_branch`
3. Push to your branch - `git push origin my_branch`
4. Create a pull request

That's it!

Please respect the indentation rules and code style. And use 2 spaces, not tabs. And don't touch the version thing or distribution files; this will be made when a new version is going to be released.

## License

The Serverless and associated scripts and documentation in this project are released under the [MIT License](LICENSE).
