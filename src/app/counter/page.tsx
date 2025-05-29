import { Counter } from "./counter"

export const metadata = {
    title: 'Counter Page',
    description: 'This is the counter page of the application.',
}

export default function CounterPage(){
    return <Counter />
}
