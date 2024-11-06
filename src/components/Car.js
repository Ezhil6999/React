
function Car(props) {
    const {brand,model} = props
    // const brand = 'Bucati RTX 3080'
    // const text = `Hi I am  a ${brand} - ${model} car`
    return (
        <>
        {brand!==undefined && model!==undefined?
      <h1>Hi I am  a {brand} - {model} car</h1> : null}
      </>
    );
};

export default Car;