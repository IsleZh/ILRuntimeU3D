import { UnityEngine, System,Performance } from "csharp";
import { $typeof } from "puerts";

let MandelbrotCheck:any = function(workX:any, workY:any){
	return ((workX * workX) + (workY * workY)) < 4.0
}
let GameObject = UnityEngine.GameObject
let Vector3 = UnityEngine.Vector3
let Quaternion = UnityEngine.Quaternion
function TestMandelbrot(sb:System.Text.StringBuilder){
	let data = 0.0
	let iterations = 4
	let width = 64
	let height = 64
	//let _os_t = os.clock
	let _ct = UnityEngine.Time.realtimeSinceStartup
	for(let i:number = 1;i< iterations;i++){
		let left = -2.1
		let right = 1.0
		let top = -1.3
		let bottom = 1.3
		let deltaX = (right - left) / width
		let deltaY = (bottom - top) / height
		let coordinateX = left
		for(let x = 1; x<width;x++) {
			let coordinateY = top
			for( let y = 1;y< height ;y++){
				let workX = 0
				let workY = 0
				let counter = 0
				//while(counter < 255 and MandelbrotCheck(workX, workY))
				while(counter < 255 && Performance.MandelbrotCheck(workX, workY))				
				{
					counter = counter + 1
					let newX = (workX * workX) - (workY * workY) + coordinateX
					workY = 2 * workX * workY + coordinateY
                    workX = newX;
				}
				
				data = workX + workY
                coordinateY = coordinateY + deltaY
			}
			coordinateX = coordinateX + deltaX
		}
    }
	let _d =  UnityEngine.Time.realtimeSinceStartup  - _ct
	sb.AppendLine("res="+data+", time:"+_d*1000);
}

function Test0(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	let go = new GameObject("t")
	let transform = go.transform
	
	for(let i=1;i<2000000;i++){
		transform.position = transform.position
	}
	GameObject.Destroy(go)
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test1(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	let go = new GameObject("t")
	let transform = go.transform
	
	for(let i=1;i<2000000;i++){
		transform.Rotate(Vector3.up, 1)
	}
	
	GameObject.Destroy(go)
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test2(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	
	for(let i=1;i<2000000;i++){
		let v = new Vector3(i, i, i)
		let x = v.x
let y = v.y
let z = v.z
	}
	
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test3(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	
	for(let i=1;i<20000;i++){
		let go = new GameObject()
		GameObject.Destroy(go)
	}
	
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test4(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	let tp= $typeof(UnityEngine.SkinnedMeshRenderer)
	
	for(let i=1;i<20000;i++){
		let go = new GameObject()
		//go.AddComponent(System.Type.GetType("UnityEngine.SkinnedMeshRenderer"))
		go.AddComponent(tp)
		let c = go.GetComponent(tp) as UnityEngine.SkinnedMeshRenderer
		c.receiveShadows = false
		GameObject.Destroy(go)
	}
	
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)

}

function Test5(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	
	for(let i=1;i<2000000;i++){
		let p = UnityEngine.Input.mousePosition
	}
	
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test6(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	
	for(let i=1;i<2000000;i++){
		let v = new Vector3(i, i, i)
		Vector3.Normalize(v)
	}
	
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test7(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	
	for(let i=1;i<2000000;i++){
		let q1 = Quaternion.Euler(i, i, i)
		let q2 = Quaternion.Euler(i * 2, i * 2, i * 2)
		Quaternion.Slerp(Quaternion.identity, q1, 0.5)
	}
	
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test8(sb:any){
	let total = 0
	let t = UnityEngine.Time.realtimeSinceStartup
	
	for(let i=1;i<2000000;i++){
		total = total + i - (i / 2) * (i + 3) / (i + 5)
	}
	
	sb.AppendLine("res="+total+"+time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test9(sb:any){
	let array:Array<number> = [];
	for (let i = 1;i< 1024;i++) {
		array[i] = i
	}
	
	let total = 0
	let t = UnityEngine.Time.realtimeSinceStartup
	
	for (let j = 1;j< 20000;j++) {
		for (let i = 1;i< 1024;i++) {
			total = total + array[i]
		}
	}
	
	sb.AppendLine("res="+total+",time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test10(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	let go = new GameObject("t")
	let transform = go.transform
	
	for(let i=1;i<2000000;i++){
		Performance.TestFunc1(1, "123", transform)
	}
	
	GameObject.Destroy(go)
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

function Test11(sb:any){
	let t = UnityEngine.Time.realtimeSinceStartup
	
	let c = function(o:any, x:any){
		let r = o + x
	}
	
	for(let i = 1; i<1000000; i++) {
		let a = new Vector3(1, 2, 3)
		let b = new Vector3(4, 5, 6)
		c(a,b)
	}
	
	sb.AppendLine("time="+(UnityEngine.Time.realtimeSinceStartup-t)*1000)
}

var getTsFunction = function(funcName:string) {
    switch (funcName) {
        case "TestMandelbrot":
            return TestMandelbrot
            break
        case "Test0":
            return Test0
            break
        case "Test1":
            return Test1
            break
        case "Test2":
            return Test2
            break
        case "Test3":
            return Test3
            break
        case "Test4":
            return Test4
            break
        case "Test5":
            return Test5
            break
        case "Test6":
            return Test6
            break
        case "Test7":
            return Test7
            break
        case "Test8":
            return Test8
            break
        case "Test9":
            return Test9
            break
        case "Test10":
            return Test10
            break
        case "Test11":
            return Test11
            break
    }
}

export {getTsFunction}