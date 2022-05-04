import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {

  const error = ref(null)
  const isLoading = ref(false)

  /*add a new document (javascript dokument)*/
  const addDoc = async (doc) => {
    error.value = null
    isLoading.value = true

    try {
      await projectFirestore.collection(collection).add(doc)
      isLoading.value = false
    }
    catch(err) {
      console.log(err.message)
      error.value = 'could not send the message'
      isLoading.value = false
    }
  }

  return { error, addDoc, isLoading }

}

export default useCollection