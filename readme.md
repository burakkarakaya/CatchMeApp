### Resource
https://www.robinwieruch.de/react-hooks-fetch-data

### Kendime Notlar
- stacknavigator kullandığımızda her zaman bir önceki ekran sahnede kalacağı için redux ile tetikleme yaptığımızda önceki ekranada yansır bu sebeple useIsFocused kullanarak ekstra kontrol ekleyebiliriz. Loading ekranındaki gibi.

```js
import { useIsFocused } from '@react-navigation/native';

const isFocused = useIsFocused();

````




