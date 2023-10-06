import FbImageLibrary from 'react-fb-image-grid'
function Feeds(props) {

    const { images, title, profilePic, username } = props
    return (<>
        <div style={{ width: '70%', backgroundColor: 'Gray' }}>
            <div style={{ backgroundColor: 'Gray', display: 'flex' }}>
                <img height={100} width={100} style={{ border: '2px', padding: '2%', borderRadius: '50%', alignItems: 'flex-start' }} src=
                    {profilePic} />
                <h3 style={{ marginTop: 'auto', marginBottom: 'auto' }}>{username}</h3>
            </div>

            <p style={{ width: '80%', marginLeft: '3%' }}>{title}</p>
            <div  >
                <FbImageLibrary images={images} />



            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2%' }}>
                <button style={{ backgroundColor: 'red', border: '2px', padding: '1%', width: '20%' }}>Like</button>
                <button style={{ backgroundColor: 'red', border: '2px', padding: '1%', width: '20%' }} >Comments</button>
                <button style={{ backgroundColor: 'red', border: '2px', padding: '1%', width: '20%' }} >Share</button>
            </div>

        </div>

    </>);
}

export default Feeds;