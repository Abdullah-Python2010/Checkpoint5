import hello from '../Images/Hello-pana.svg';

export const welcomeUser = () => {
    {  
        let name = prompt('Enter Your name');
        var add = name === 'Abdullah' ? name : 'There'
    }
    return(
        <div className='message'>
            <img src={hello} alt="Hello Pana" />
            <h2 className="name">{add}</h2>
        </div>
    )
}