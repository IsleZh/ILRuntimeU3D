"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTsFunction = void 0;
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
let MandelbrotCheck = function (workX, workY) {
    return ((workX * workX) + (workY * workY)) < 4.0;
};
let GameObject = csharp_1.UnityEngine.GameObject;
let Vector3 = csharp_1.UnityEngine.Vector3;
let Quaternion = csharp_1.UnityEngine.Quaternion;
function TestMandelbrot(sb) {
    let data = 0.0;
    let iterations = 4;
    let width = 64;
    let height = 64;
    let _ct = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    for (let i = 1; i < iterations; i++) {
        let left = -2.1;
        let right = 1.0;
        let top = -1.3;
        let bottom = 1.3;
        let deltaX = (right - left) / width;
        let deltaY = (bottom - top) / height;
        let coordinateX = left;
        for (let x = 1; x < width; x++) {
            let coordinateY = top;
            for (let y = 1; y < height; y++) {
                let workX = 0;
                let workY = 0;
                let counter = 0;
                while (counter < 255 && csharp_1.Performance.MandelbrotCheck(workX, workY)) {
                    counter = counter + 1;
                    let newX = (workX * workX) - (workY * workY) + coordinateX;
                    workY = 2 * workX * workY + coordinateY;
                    workX = newX;
                }
                data = workX + workY;
                coordinateY = coordinateY + deltaY;
            }
            coordinateX = coordinateX + deltaX;
        }
    }
    let _d = csharp_1.UnityEngine.Time.realtimeSinceStartup - _ct;
    sb.AppendLine("res=" + data + ", time:" + _d * 1000);
}
function Test0(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    let go = new GameObject("t");
    let transform = go.transform;
    for (let i = 1; i < 2000000; i++) {
        transform.position = transform.position;
    }
    GameObject.Destroy(go);
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test1(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    let go = new GameObject("t");
    let transform = go.transform;
    for (let i = 1; i < 2000000; i++) {
        transform.Rotate(Vector3.up, 1);
    }
    GameObject.Destroy(go);
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test2(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    for (let i = 1; i < 2000000; i++) {
        let v = new Vector3(i, i, i);
        let x = v.x;
        let y = v.y;
        let z = v.z;
    }
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test3(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    for (let i = 1; i < 20000; i++) {
        let go = new GameObject();
        GameObject.Destroy(go);
    }
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test4(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    let tp = (0, puerts_1.$typeof)(csharp_1.UnityEngine.SkinnedMeshRenderer);
    for (let i = 1; i < 20000; i++) {
        let go = new GameObject();
        go.AddComponent(tp);
        let c = go.GetComponent(tp);
        c.receiveShadows = false;
        GameObject.Destroy(go);
    }
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test5(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    for (let i = 1; i < 2000000; i++) {
        let p = csharp_1.UnityEngine.Input.mousePosition;
    }
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test6(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    for (let i = 1; i < 2000000; i++) {
        let v = new Vector3(i, i, i);
        Vector3.Normalize(v);
    }
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test7(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    for (let i = 1; i < 2000000; i++) {
        let q1 = Quaternion.Euler(i, i, i);
        let q2 = Quaternion.Euler(i * 2, i * 2, i * 2);
        Quaternion.Slerp(Quaternion.identity, q1, 0.5);
    }
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test8(sb) {
    let total = 0;
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    for (let i = 1; i < 2000000; i++) {
        total = total + i - (i / 2) * (i + 3) / (i + 5);
    }
    sb.AppendLine("res=" + total + "+time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test9(sb) {
    let array = [];
    for (let i = 1; i < 1024; i++) {
        array[i] = i;
    }
    let total = 0;
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    for (let j = 1; j < 20000; j++) {
        for (let i = 1; i < 1024; i++) {
            total = total + array[i];
        }
    }
    sb.AppendLine("res=" + total + ",time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test10(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    let go = new GameObject("t");
    let transform = go.transform;
    for (let i = 1; i < 2000000; i++) {
        csharp_1.Performance.TestFunc1(1, "123", transform);
    }
    GameObject.Destroy(go);
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
function Test11(sb) {
    let t = csharp_1.UnityEngine.Time.realtimeSinceStartup;
    let c = function (o, x) {
        let r = o + x;
    };
    for (let i = 1; i < 1000000; i++) {
        let a = new Vector3(1, 2, 3);
        let b = new Vector3(4, 5, 6);
        c(a, b);
    }
    sb.AppendLine("time=" + (csharp_1.UnityEngine.Time.realtimeSinceStartup - t) * 1000);
}
var getTsFunction = function (funcName) {
    switch (funcName) {
        case "TestMandelbrot":
            return TestMandelbrot;
            break;
        case "Test0":
            return Test0;
            break;
        case "Test1":
            return Test1;
            break;
        case "Test2":
            return Test2;
            break;
        case "Test3":
            return Test3;
            break;
        case "Test4":
            return Test4;
            break;
        case "Test5":
            return Test5;
            break;
        case "Test6":
            return Test6;
            break;
        case "Test7":
            return Test7;
            break;
        case "Test8":
            return Test8;
            break;
        case "Test9":
            return Test9;
            break;
        case "Test10":
            return Test10;
            break;
        case "Test11":
            return Test11;
            break;
    }
};
exports.getTsFunction = getTsFunction;
//# sourceMappingURL=performance.js.map