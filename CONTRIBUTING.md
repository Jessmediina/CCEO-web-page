# Welcome the guide to documenting in the CCEO web page project

Hello, we imagine that you are new to the project, and you are interested in contributing your knowledge to this development. Remember that all the changes made to the platform can be consulted in the [project releases](https://github.com/cceo-developer/cceo-web-page/releases).

In this guide, you'll get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## Guide for new collaborators

For an overview of the project, read the [README](https://github.com/cceo-developer/cceo-web-page/blob/main/README.md). Here are some resources to help you get started with code contributions:

- [Git Documentation](https://git-scm.com/book/es/v2)
- [Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
- [Collaborate using pull requests](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests)
- [Good practices](https://coda.io/d/Buenas-practicas-de-desarrollo_dz5eYvD14LH/Buenas-practicas-de-desarrollo_suDEm)

### Issues

#### Create a new issue

If you detect a problem with the documentation, please notify the person in charge of the product, he will follow up appropriately to solve the problem. If there is no related issue, you can open a new one using [GITHUB](https://github.com/cceo-developer/cceo-web-page/issues/new).

#### Solve an issue

We have a predilection for assigning issues to the people who were responsible for the module that presents the problem or change, but we do not limit that any member of the team can solve it. Once it is resolved, we only ask that you answer the issue in the Console so that the customer support team is aware of it.

### To make changes

#### Previous considerations

Before you start developing, consider that we use the [domain-oriented design](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice) for easy understanding and code reuse. As well as these considerations, you must take into account that we program based on tests ([TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas)) so it is essential that all modules and developments have their respective test.

### Upload your changes

Review your changes and make your commits once you are happy with them. Remember that it is your obligation to evaluate on your machine the correct functioning of your code in conjunction with the rest. Don't forget to self-assess yourself to speed up the review process.

### Pull Request

When you're done with your changes, create a pull request, also known as a PR.

- Complete the [New pull request](https://github.com/cceo-developer/cceo-web-page/compare) form, filling in a list of all the activities that were carried out.
- The pull request must be accepted by one of your teammates and in case it is a hotfix by one of your project leaders
- In case you have conflicts, your code will need to be approved by someone else before we can fix the problems and mix.

## Development Environments

### Local environment

This site can be developed on any operating system, but we recommend using a Linux or Mac environment to make the development process easier.

### Online environments

We have different environments where we upload the changes and each one has a different approach. Our environments are:

* Sandbox: Special environment where the development team can perform tests. URL: https://web.cceo.io/
* Production: Productive environment, this is where the real operations are located. URL: https://cceo.com.mx/