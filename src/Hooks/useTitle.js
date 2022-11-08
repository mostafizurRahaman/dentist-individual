import { useEffect } from "react"


const useTitle = (title) => {
   useEffect(()=>{
      document.title = `${title} - Mr. Dentist`
   }, [title])
}


export default useTitle;