/* 
***NamedComponent***

renders a *p* that should accept a property of “name” and display text “My name is *name*”.
*/

const NamedComponent = ({name}) => {
    return <p>My name is {name}. Nice to meet you!</p>
}