### Resource
- https://github.com/react-native-community/react-native-modal
- https://www.robinwieruch.de/react-hooks-fetch-data
- https://reactnavigation.org/docs/auth-flow/

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
- createMaterialTopTabNavigator tab kısmının gorunumunu değiştirmek için

```js
return (
        <TopTab.Navigator
            tabBarOptions={{
                activeTintColor: '#FFFFFF', // yazı rengi
                inactiveTintColor: 'rgba(255,255,255,.7)', // yazı rengi inactive
                labelStyle: { textTransform: 'none', }, // default uppercase olur text normal boyutuna çevirmek için kullanırız
                tabStyle: { width: 'auto', flex: 0 }, // yazı içeriğine gore boyut alması
                style: { backgroundColor: 'transparent', position: 'absolute', top: _insetTop, left: 0, right: 0, zIndex: 2, borderBottomColor: '#FFFFFF', borderBottomWidth: 1, paddingLeft: 18 }, // header tab kısmı absolute yapmak
                indicatorStyle: { backgroundColor: '#FFFFFF', marginLeft: 18 } // indicator
            }}
        >
            <TopTab.Screen
                options={{ tabBarLabel: 'For You' }}
                name={NAVIGATION_TO_FORYOU_SCREEN}
                component={Home}
            />
            <TopTab.Screen
                options={{ title: 'Following' }}
                name={NAVIGATION_TO_FOLLOWING_SCREEN}
                component={Home}
            />
            <TopTab.Screen
                options={{ title: 'Recent' }}
                name={NAVIGATION_TO_RECENT_SCREEN}
                component={Home}
            />
        </TopTab.Navigator>
    )
```



