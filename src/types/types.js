//type set
import typeSet from './type/typeSet';

//presence set
import presenceSet from './presence/presenceSet';

//regexp set
import regexpSet from './regexp/regexpSet';

//string set
import stringSet from './string/stringSet';

//arithmetic set
import arithmeticSet from './arithmetic/arithmeticSet';

//object set
import objectSet from './object/objectSet';

//array set
import arraySet from './array/arraySet';

//environment set
import environmentSet from './environment/environmentSet';

//time set
import timeSet from './time/timeSet';

//configuration set
import configurationSet from './configuration/configurationSet';

let types = Object.assign(
  typeSet,
  presenceSet,
  regexpSet,
  stringSet,
  arithmeticSet,
  objectSet,
  arraySet,
  environmentSet,
  timeSet,
  configurationSet
);

export default types;
