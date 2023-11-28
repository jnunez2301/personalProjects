const useForm = () =>{
   
    const moveLabel = (event) =>{
        const {style}  = event.target;
        style.position = 'relative';
        style.top = '-10px';
        style.backgroundColor = '#f2f2f2';
    }
   

    return {
        moveLabel

    }
}

export default useForm;