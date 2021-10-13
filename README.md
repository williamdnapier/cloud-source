## About CloudSource
CloudSource is a Vue.js UI which will enable users to select and purchase Azure cloud resources.

## Azure Integration
This app simply focuses on creating a Vue.js UI which could call Azure RESTful API endpoints to retrieve resources. The main purpose of this app is to focus on Vue.js development and NOT integrating Azure API calls. As such, we will mock out a json-server which will return all the data required by our Vue components.

In order to integrate with the Azure Marketplace, please refer to the article [Find and use Azure Marketplace VM images with Azure PowerShell](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/cli-ps-findimage). The Azure API REST calls can be found here [Azure Virtual Machine Images Overview of Operations](https://docs.microsoft.com/en-us/rest/api/compute/virtual-machine-images). To setup a client like Postman to make the necessary PUT, POST, DELETE commands, etc. follow this article by Jon Gallant of the Azure Team, [Azure REST APIs with Postman (2021)](https://blog.jongallant.com/2021/02/azure-rest-apis-postman-2021/). These articles should help with next steps if you are considering integrating with Azure using the Fetch APIs or Axios.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
