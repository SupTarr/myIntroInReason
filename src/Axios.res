@module("axios") external axiosGet: string => Promise.t<'a> = "get"

let v2_base = "https://pokeapi.co/api/v2/pokemon/"

open Promise

let result =
  axiosGet(v2_base ++ "pikachu")
  ->then(data => data->Js.log->resolve)
  ->catch(err => {
    switch err {
    | JsError(obj) =>
      obj->Js.Exn.message->Belt.Option.getWithDefault("Must be some non-error value")->Js.log
    | _ => Js.log("Some unknown error")
    }
    resolve()
  })

Js.log(result)