### Resource
https://www.robinwieruch.de/react-hooks-fetch-data
https://reactnavigation.org/docs/auth-flow/

### Kendime Notlar
- stacknavigator kullandığımızda her zaman bir önceki ekran sahnede kalacağı için redux ile tetikleme yaptığımızda önceki ekranada yansır bu sebeple useIsFocused kullanarak ekstra kontrol ekleyebiliriz. Loading ekranındaki gibi.

```js
import { useIsFocused } from '@react-navigation/native';

const isFocused = useIsFocused();

````

- iphone XR ekranın altındaki çıkıntı için nekadarlık padding verilebileceğini aşağıdaki metod ile anlayabiliriz.
```js
import { useSafeArea } from 'react-native-safe-area-context';

export defaults function MyScreen() {
 
 const insets = useSafeArea();

  return(
    <SafeAreaView style={{ flex:1, paddingBottom: insets.bottom }}>
      // screen contents
    </SafeAreaView>
  );
}
```




