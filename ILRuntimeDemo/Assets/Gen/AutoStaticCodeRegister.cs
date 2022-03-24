namespace PuertsStaticWrap
{
    public static class AutoStaticCodeRegister
    {
        public static void Register(Puerts.JsEnv jsEnv)
        {
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Object), System_Object_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Object), UnityEngine_Object_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector2), UnityEngine_Vector2_Wrap.GetRegisterInfo);
                UnityEngine_Vector2_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector3), UnityEngine_Vector3_Wrap.GetRegisterInfo);
                UnityEngine_Vector3_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector4), UnityEngine_Vector4_Wrap.GetRegisterInfo);
                UnityEngine_Vector4_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Quaternion), UnityEngine_Quaternion_Wrap.GetRegisterInfo);
                UnityEngine_Quaternion_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Color), UnityEngine_Color_Wrap.GetRegisterInfo);
                UnityEngine_Color_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Ray), UnityEngine_Ray_Wrap.GetRegisterInfo);
                UnityEngine_Ray_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Bounds), UnityEngine_Bounds_Wrap.GetRegisterInfo);
                UnityEngine_Bounds_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Ray2D), UnityEngine_Ray2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Time), UnityEngine_Time_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GameObject), UnityEngine_GameObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Component), UnityEngine_Component_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Behaviour), UnityEngine_Behaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Transform), UnityEngine_Transform_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resources), UnityEngine_Resources_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextAsset), UnityEngine_TextAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Keyframe), UnityEngine_Keyframe_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationCurve), UnityEngine_AnimationCurve_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationClip), UnityEngine_AnimationClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MonoBehaviour), UnityEngine_MonoBehaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem), UnityEngine_ParticleSystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SkinnedMeshRenderer), UnityEngine_SkinnedMeshRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Renderer), UnityEngine_Renderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WWW), UnityEngine_WWW_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Light), UnityEngine_Light_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mathf), UnityEngine_Mathf_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Collections.Generic.List<int>), System_Collections_Generic_List_1_System_Int32__Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Debug), UnityEngine_Debug_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Performance), Performance_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Text.StringBuilder), System_Text_StringBuilder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Input), UnityEngine_Input_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Type), System_Type_Wrap.GetRegisterInfo);
                
        }
    }
}