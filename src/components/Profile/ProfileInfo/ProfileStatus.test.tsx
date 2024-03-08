//for class component
// import {create} from "react-test-renderer";
// import {ProfileStatus} from "./ProfileStatus";
//
// describe("123", ()=>{
//     test("status from props should be in the state", () => {
//         const component = create(<ProfileStatus status={"it"} updateStatusTC={()=>{}}/>)
//         const instance = component.getInstance()
//         console.log(instance)
//         // @ts-ignore
//         expect(instance.props.status).toBe("it")
//     })
// })

import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus Component", ()=>{
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"it"} updateStatusTC={()=>{}}/>)
        const root = component.root
        expect(root.props.status).toBe("it")
    })
    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status={"it"} updateStatusTC={()=>{}}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let spans = root.findAllByType("span")
        expect(spans.length).toBe(1)
    })
    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status={"it"} updateStatusTC={()=>{}}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let spans = root.findByType("span")
        expect(spans.children[0]).toBe('it') //hz
    })
    test("after creation input cannot be displayed", () => {
        const component = create(<ProfileStatus status={"it"} updateStatusTC={()=>{}}/>)
        const root = component.root
        expect(()=>{
            // eslint-disable-next-line testing-library/await-async-query
            let input = root.findByType("input")
        }).toThrow()
    })
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={"it"} updateStatusTC={()=>{}}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let spans = root.findByType("span")
        spans.props.onDoubleClick()
        // eslint-disable-next-line testing-library/await-async-query
        let input = root.findByType("input")
        expect(input.props.value).toBe('it') //hz
    })
    // test("callback should be called", () => {
    //     const mockCallback = jest.fn()
    //     const component = create(<ProfileStatus status={"it"} updateStatusTC={mockCallback}/>)
    //     const root = component.root
    //     root.deactivateEditMode() //???
    //     let instance = component.getInstance()
    //     expect(mockCallback.mock.calls.length).toBe(1)
    // })
})