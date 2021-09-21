import * as movies_service from "./movies.service"
import * as create_movie_dto from "./dto/create-movie.dto"
// @ponicode
describe("getAll", () => {
    let inst: any

    beforeEach(() => {
        inst = new movies_service.MoviesService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteOne", () => {
    let inst: any

    beforeEach(() => {
        inst = new movies_service.MoviesService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.deleteOne("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.deleteOne(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.deleteOne(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.deleteOne("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.deleteOne(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.deleteOne(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new movies_service.MoviesService()
    })

    test("0", () => {
        let param1: any = new create_movie_dto.CreateMovieDto()
        let callFunction: any = () => {
            inst.create(param1)
        }
    
        expect(callFunction).not.toThrow()
    })
})
