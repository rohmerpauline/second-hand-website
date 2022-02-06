export const OBJECT_CONDITION_ITEMS = [
   { value: undefined, key: 'Sélectionner une option...' },
   { value: 'veryGoodState', key: 'Très bon état', name: 'object_condition' },
   { value: 'goodCondition', key: 'Bon état', name: 'object_condition' },
   { value: 'averageCondition', key: 'État moyen', name: 'object_condition' },
   { value: 'satisfactoryCondition', key: 'État satisfaisant', name: 'object_condition' },
];

const objectCondition = [];

OBJECT_CONDITION_ITEMS.map((item) => {
   objectCondition.push(item.value);
});

objectCondition.shift();

export const OBJECT_CONDITION_VALUES = objectCondition;
