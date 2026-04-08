# Comapeo Camera Trap Deployment

See the **[Comapeo Camera Trap Deployment](https://docs.guardianconnector.net/reference/connected-applications/comapeo/camera-trap-deployment.md)** on the Guardian Connector docs website for more information.

## Building a new camera traps category set

If you have customized the category set, you can build a new category set using the `comapeocat` command line tool. This requires you to have Node Package Manager (npm) installed.

```sh
npm install -g comapeocat

# Run this in the same directory where this README.md file is located
npx comapeocat build ./config --output camera-trap-deployment.comapeocat
```


Please see the [comapeocat documentation](https://github.com/digidem/comapeocat) for more information.

CMI or Awana Digital can help you build a new category set if you need assistance.