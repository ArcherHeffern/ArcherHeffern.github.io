
export default function Chip({name}: {name: string}) {
    return (
        <span style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center', padding: '8px', marginRight: '4px', marginTop: '4px', boxSizing: 'border-box', fontWeight: 700, height: '24px', backgroundColor: 'rgb(31, 41, 55)', borderRadius: '.5rem', color: 'white'}}>
            {name}
        </span>
    )
}