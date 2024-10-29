function Gun(){
    function handleTriggered(){
        alert('Shoot!')
        alert('Bullet Goes!')
    }
    return (
        <>
        <h2>
            Gun
        </h2>
        <button onClick={handleTriggered}>
         Trigger
        </button>
        </>
    )
}

export default Gun;