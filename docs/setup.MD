1. Create the project

```bash
$ npx react-native init appbase
```

2. Use Android Studio to open the android folder and
setup the Project Structure, specify the SDK Location options and also
update the plugin if needed.

3. List the avds
```bash
$ emulator -list-avds
``` 

4. Start an emulator
```bash
$ emulator @<avd_name> -wipe-data
```

5. Configure react-native run configuration and run it

6. To use the native base icon set, need to manual install and link
```bash
$ yarn add react-native-vector-icons
$ react-native link react-native-vector-icons
```
