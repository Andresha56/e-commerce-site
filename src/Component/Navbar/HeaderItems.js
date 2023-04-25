
import './nav.css'

function HeaderItems() {

    const headerItems = [
        {
            id: 1,
            item: "Fashion"
        }, {
            id: 2,
            item: "Electronics"
        },{
            id: 3,
            item: "Home"
        },{
            id:4,
            item:"Mobiles"
        },{
            id:5,
            item:"shoes"
        },{
            id:6,
            item:"kids"
        }
    ]

    return (
        <>
        <div className='wrapper'>
            {
                headerItems.map((items) => {
                    return (
                        <a key={items.id} href='./'>{items.item}</a>
                    )
                })
            }
        </div>
        </>   
    )
}

export default HeaderItems
