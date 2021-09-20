import CategoriesItems from '../Configs/CategoriesItems'
import ObjectConditionItems from '../Configs/ObjectConditionItems'

const selectCategory = CategoriesItems.map((category) => ({
    value : category.value,
    label : category.label,
    name: category.name
}))

const selectObjectCondition = ObjectConditionItems.map((objectcondition) => ({
    value : objectcondition.value,
    label : objectcondition.label,
    name: objectcondition.name
}))

export const OFFER_OBJECT = [
    { id: 1, type: 'text', name: 'title', placeholder: 'plante, meuble-tv, lampe...', label: 'Titre de mon annonce :' },
    { id: 2, type: 'textarea', name: 'description', placeholder: 'En super bon état. À venir chercher entre 10h et 12h.', label: 'Decriptif de mon annonce :'},
    { id: 3, type: 'text', name: 'location', placeholder: 'Bruxelles, Namur, Liège...', label: 'Lieu de l\'annonce :' },
    { id: 4, type: 'select', name: 'categories', defaultValue: selectCategory[0], options: selectCategory, label: 'Catégories :' },
    { id: 5, type: 'select', name: 'objectcondition', defaultValue: selectObjectCondition[0], options: selectObjectCondition, label: 'État de l\'objet :'}
]

export const ASK_OBJECT = [
    { id: 1, type: 'text', name: 'title', placeholder: 'plante, meuble-tv, lampe...', label: 'Titre de mon annonce :' },
    { id: 2, type: 'textarea', name: 'description', placeholder: 'En super bon état. À venir chercher entre 10h et 12h.', label: 'Decriptif de mon annonce :'},
    { id: 3, type: 'text', name: 'location', placeholder: 'Bruxelles, Namur, Liège...', label: 'Lieu de l\'annonce :' },
    { id: 4, type: 'select', name: 'categories', defaultValue: selectCategory[0], options: selectCategory, label: 'Catégories :' }
]

export const ASK_SERVICE = [
    { id: 1, type: 'text', name: 'title', placeholder: 'plante, meuble-tv, lampe...', label: 'Titre de mon annonce :' },
    { id: 2, type: 'textarea', name: 'description', placeholder: 'Je recherche quelqu\'un pour m\'aider à fixer une étagère.', label: 'Decriptif de mon annonce :'},
    { id: 3, type: 'text', name: 'location', placeholder: 'Bruxelles, Namur, Liège...', label: 'Lieu de l\'annonce :' }
]

export const OFFER_SERVICE = [
    { id: 1, type: 'text', name: 'title', placeholder: 'plante, meuble-tv, lampe...', label: 'Titre de mon annonce :' },
    { id: 2, type: 'textarea', name: 'description', placeholder: 'Disponible pour des travaux de petit bricolage.', label: 'Decriptif de mon annonce :'},
    { id: 3, type: 'text', name: 'location', placeholder: 'Bruxelles, Namur, Liège...', label: 'Lieu de l\'annonce :' }
]