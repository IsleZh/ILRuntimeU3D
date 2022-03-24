   
declare module 'csharp' {
    import * as CSharp from 'csharp';
    export default CSharp;
}
declare module 'csharp' {
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
            public GetType () : System.Type
            public ToString () : string
            public static ReferenceEquals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
        {
        }
        class ValueType extends System.Object
        {
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        interface IEquatable$1<T>
        {
        }
        class Int32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        interface IFormattable
        {
        }
        class Type extends System.Reflection.MemberInfo implements System.Reflection.IReflect, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
            public static FilterAttribute : System.Reflection.MemberFilter
            public static FilterName : System.Reflection.MemberFilter
            public static FilterNameIgnoreCase : System.Reflection.MemberFilter
            public static Missing : any
            public static Delimiter : number
            public static EmptyTypes : System.Array$1<System.Type>
            public get MemberType(): System.Reflection.MemberTypes;
            public get DeclaringType(): System.Type;
            public get DeclaringMethod(): System.Reflection.MethodBase;
            public get ReflectedType(): System.Type;
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            public get GUID(): System.Guid;
            public static get DefaultBinder(): System.Reflection.Binder;
            public get Module(): System.Reflection.Module;
            public get Assembly(): System.Reflection.Assembly;
            public get TypeHandle(): System.RuntimeTypeHandle;
            public get FullName(): string;
            public get Namespace(): string;
            public get AssemblyQualifiedName(): string;
            public get BaseType(): System.Type;
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            public get IsNested(): boolean;
            public get Attributes(): System.Reflection.TypeAttributes;
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            public get IsVisible(): boolean;
            public get IsNotPublic(): boolean;
            public get IsPublic(): boolean;
            public get IsNestedPublic(): boolean;
            public get IsNestedPrivate(): boolean;
            public get IsNestedFamily(): boolean;
            public get IsNestedAssembly(): boolean;
            public get IsNestedFamANDAssem(): boolean;
            public get IsNestedFamORAssem(): boolean;
            public get IsAutoLayout(): boolean;
            public get IsLayoutSequential(): boolean;
            public get IsExplicitLayout(): boolean;
            public get IsClass(): boolean;
            public get IsInterface(): boolean;
            public get IsValueType(): boolean;
            public get IsAbstract(): boolean;
            public get IsSealed(): boolean;
            public get IsEnum(): boolean;
            public get IsSpecialName(): boolean;
            public get IsImport(): boolean;
            public get IsSerializable(): boolean;
            public get IsAnsiClass(): boolean;
            public get IsUnicodeClass(): boolean;
            public get IsAutoClass(): boolean;
            public get IsArray(): boolean;
            public get IsGenericType(): boolean;
            public get IsGenericTypeDefinition(): boolean;
            public get IsConstructedGenericType(): boolean;
            public get IsGenericParameter(): boolean;
            public get GenericParameterPosition(): number;
            public get ContainsGenericParameters(): boolean;
            public get IsByRef(): boolean;
            public get IsPointer(): boolean;
            public get IsPrimitive(): boolean;
            public get IsCOMObject(): boolean;
            public get HasElementType(): boolean;
            public get IsContextful(): boolean;
            public get IsMarshalByRef(): boolean;
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            public get IsSecurityCritical(): boolean;
            public get IsSecuritySafeCritical(): boolean;
            public get IsSecurityTransparent(): boolean;
            public get UnderlyingSystemType(): System.Type;
            public get IsSZArray(): boolean;
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public MakePointerType () : System.Type
            public MakeByRefType () : System.Type
            public MakeArrayType () : System.Type
            public MakeArrayType ($rank: number) : System.Type
            public static GetTypeFromProgID ($progID: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $throwOnError: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string, $throwOnError: boolean) : System.Type
            public static GetTypeCode ($type: System.Type) : System.TypeCode
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>) : any
            public static GetTypeHandle ($o: any) : System.RuntimeTypeHandle
            public GetArrayRank () : number
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructor ($types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructors () : System.Array$1<System.Reflection.ConstructorInfo>
            public GetConstructors ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.ConstructorInfo>
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.MethodInfo
            public GetMethod ($name: string) : System.Reflection.MethodInfo
            public GetMethods () : System.Array$1<System.Reflection.MethodInfo>
            public GetMethods ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MethodInfo>
            public GetField ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.FieldInfo
            public GetField ($name: string) : System.Reflection.FieldInfo
            public GetFields () : System.Array$1<System.Reflection.FieldInfo>
            public GetFields ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.FieldInfo>
            public GetInterface ($name: string) : System.Type
            public GetInterface ($name: string, $ignoreCase: boolean) : System.Type
            public GetInterfaces () : System.Array$1<System.Type>
            public FindInterfaces ($filter: System.Reflection.TypeFilter, $filterCriteria: any) : System.Array$1<System.Type>
            public GetEvent ($name: string) : System.Reflection.EventInfo
            public GetEvent ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.EventInfo
            public GetEvents () : System.Array$1<System.Reflection.EventInfo>
            public GetEvents ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.EventInfo>
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type) : System.Reflection.PropertyInfo
            public GetProperty ($name: string) : System.Reflection.PropertyInfo
            public GetProperties ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.PropertyInfo>
            public GetProperties () : System.Array$1<System.Reflection.PropertyInfo>
            public GetNestedTypes () : System.Array$1<System.Type>
            public GetNestedTypes ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Type>
            public GetNestedType ($name: string) : System.Type
            public GetNestedType ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Type
            public GetMember ($name: string) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers () : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetDefaultMembers () : System.Array$1<System.Reflection.MemberInfo>
            public FindMembers ($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any) : System.Array$1<System.Reflection.MemberInfo>
            public GetGenericParameterConstraints () : System.Array$1<System.Type>
            public MakeGenericType (...typeArguments: System.Type[]) : System.Type
            public GetElementType () : System.Type
            public GetGenericArguments () : System.Array$1<System.Type>
            public GetGenericTypeDefinition () : System.Type
            public GetEnumNames () : System.Array$1<string>
            public GetEnumValues () : System.Array
            public GetEnumUnderlyingType () : System.Type
            public IsEnumDefined ($value: any) : boolean
            public GetEnumName ($value: any) : string
            public IsSubclassOf ($c: System.Type) : boolean
            public IsInstanceOfType ($o: any) : boolean
            public IsAssignableFrom ($c: System.Type) : boolean
            public IsEquivalentTo ($other: System.Type) : boolean
            public static GetTypeArray ($args: System.Array$1<any>) : System.Array$1<System.Type>
            public Equals ($o: any) : boolean
            public Equals ($o: System.Type) : boolean
            public static op_Equality ($left: System.Type, $right: System.Type) : boolean
            public static op_Inequality ($left: System.Type, $right: System.Type) : boolean
            public GetInterfaceMap ($interfaceType: System.Type) : System.Reflection.InterfaceMapping
            public GetType () : System.Type
            public static GetType ($typeName: string) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static ReflectionOnlyGetType ($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean) : System.Type
            public static GetTypeFromHandle ($handle: System.RuntimeTypeHandle) : System.Type
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class String extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.IEquatable$1<string>, System.Collections.Generic.IEnumerable$1<number>
        {
        }
        interface ICloneable
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
        }
        class Void extends System.ValueType
        {
        }
        class Single extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class Enum extends System.ValueType implements System.IComparable, System.IConvertible, System.IFormattable
        {
        }
        class Array extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.Collections.IList, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection
        {
        }
        interface IFormatProvider
        {
        }
        class Double extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class UInt64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable
        {
        }
        interface IDisposable
        {
        }
        class Byte extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class UInt32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class UInt16 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        interface Converter$2<TInput, TOutput>
        { (input: TInput) : TOutput; }
        interface MulticastDelegate
        { (...args:any[]) : any; }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
        {
        }
        interface Predicate$1<T>
        { (obj: T) : boolean; }
        interface Action$1<T>
        { (obj: T) : void; }
        interface Comparison$1<T>
        { (x: T, y: T) : number; }
        interface IAsyncResult
        {
        }
        interface AsyncCallback
        { (ar: System.IAsyncResult) : void; }
        var AsyncCallback: { new (func: (ar: System.IAsyncResult) => void): AsyncCallback; }
        class IntPtr extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
        }
        class Exception extends System.Object implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
        }
        class SByte extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class Int16 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class Int64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable
        {
        }
        class Decimal extends System.ValueType implements System.IComparable, System.IComparable$1<System.Decimal>, System.IConvertible, System.Runtime.Serialization.IDeserializationCallback, System.IEquatable$1<System.Decimal>, System.IFormattable
        {
        }
        interface Func$2<T, TResult>
        { (arg: T) : TResult; }
        interface Func$4<T1, T2, T3, TResult>
        { (arg1: T1, arg2: T2, arg3: T3) : TResult; }
        class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute
        {
        }
        class Guid extends System.ValueType implements System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>, System.IFormattable
        {
        }
        enum TypeCode
        { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class RuntimeTypeHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
        interface MemberFilter
        { (m: System.Reflection.MemberInfo, filterCriteria: any) : boolean; }
        var MemberFilter: { new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter; }
        enum MemberTypes
        { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
        }
        class AssemblyName extends System.Object implements System.ICloneable, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.InteropServices._AssemblyName, System.Runtime.Serialization.ISerializable
        {
        }
        class Assembly extends System.Object implements System.Security.IEvidenceFactory, System.Runtime.InteropServices._Assembly, System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable
        {
        }
        class Binder extends System.Object
        {
        }
        enum BindingFlags
        { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        class ParameterModifier extends System.ValueType
        {
        }
        class Module extends System.Object implements System.Runtime.InteropServices._Module, System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable
        {
        }
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._ConstructorInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
        }
        enum CallingConventions
        { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
        }
        class FieldInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._FieldInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
        }
        interface TypeFilter
        { (m: System.Type, filterCriteria: any) : boolean; }
        var TypeFilter: { new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter; }
        class EventInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._EventInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
        }
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._PropertyInfo, System.Runtime.InteropServices._MemberInfo
        {
        }
        enum TypeAttributes
        { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        enum GenericParameterAttributes
        { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        class InterfaceMapping extends System.ValueType
        {
        }
    }
    namespace System.Runtime.InteropServices {
        interface _MemberInfo
        {
        }
        interface _Type
        {
        }
        interface _Exception
        {
        }
        interface _MethodBase
        {
        }
        interface _AssemblyName
        {
        }
        interface _Assembly
        {
        }
        class StructLayoutAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
        }
        interface _Attribute
        {
        }
        interface _Module
        {
        }
        interface _ConstructorInfo
        {
        }
        interface _MethodInfo
        {
        }
        interface _FieldInfo
        {
        }
        interface _EventInfo
        {
        }
        interface _PropertyInfo
        {
        }
    }
    namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IList extends System.Collections.IEnumerable, System.Collections.ICollection
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface IEnumerator
        {
        }
        interface IDictionary extends System.Collections.IEnumerable, System.Collections.ICollection
        {
        }
        class Hashtable extends System.Object implements System.Collections.IDictionary, System.ICloneable, System.Collections.IEnumerable, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.Serialization.ISerializable, System.Collections.ICollection
        {
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>
        {
        }
        interface ICollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IEnumerable$1<T>
        {
        }
        class List$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>
        {
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get_Item ($index: number) : T
            public set_Item ($index: number, $value: T) : void
            public Add ($item: T) : void
            public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
            public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public BinarySearch ($item: T) : number
            public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>) : void
            public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public Exists ($match: System.Predicate$1<T>) : boolean
            public Find ($match: System.Predicate$1<T>) : T
            public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
            public FindIndex ($match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public FindLast ($match: System.Predicate$1<T>) : T
            public FindLastIndex ($match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public ForEach ($action: System.Action$1<T>) : void
            public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
            public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
            public IndexOf ($item: T) : number
            public IndexOf ($item: T, $index: number) : number
            public IndexOf ($item: T, $index: number, $count: number) : number
            public Insert ($index: number, $item: T) : void
            public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public LastIndexOf ($item: T) : number
            public LastIndexOf ($item: T, $index: number) : number
            public LastIndexOf ($item: T, $index: number, $count: number) : number
            public Remove ($item: T) : boolean
            public RemoveAll ($match: System.Predicate$1<T>) : number
            public RemoveAt ($index: number) : void
            public RemoveRange ($index: number, $count: number) : void
            public Reverse () : void
            public Reverse ($index: number, $count: number) : void
            public Sort () : void
            public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($comparison: System.Comparison$1<T>) : void
            public ToArray () : System.Array$1<T>
            public TrimExcess () : void
            public TrueForAll ($match: System.Predicate$1<T>) : boolean
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
        }
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.IDictionary, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Runtime.Serialization.IDeserializationCallback, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        class KeyValuePair$2<TKey, TValue> extends System.ValueType
        {
        }
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        interface IDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        interface IComparer$1<T>
        {
        }
        interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable
        {
        }
    }
    namespace UnityEngine {
        /** Base class for all objects Unity can reference. */
        class Object extends System.Object
        {
        /** The name of the object. */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user? */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            public GetInstanceID () : number
            public static op_Implicit ($exists: UnityEngine.Object) : boolean
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
            * @param t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object, $t: number) : void
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
            * @param t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
            * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
            * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object) : void
            /** Gets a list of all loaded objects of Type type.
            * @param type The type of object to find.
            * @param includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Gets a list of all loaded objects of Type type.
            * @param type The type of object to find.
            * @param includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Object>
            /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
            */
            public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
            /** Returns the first active loaded object of Type type.
            * @param type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
            /** Returns the first active loaded object of Type type.
            * @param type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type, $includeInactive: boolean) : UnityEngine.Object
            public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public constructor ()
        }
        /** Representation of 3D vectors and points. */
        class Vector3 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector3>, System.IFormattable
        {
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number/** X component of the vector. */
            public x : number/** Y component of the vector. */
            public y : number/** Z component of the vector. */
            public z : number/** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0). */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1). */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1). */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1). */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0). */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0). */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0). */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0). */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector3;
            /** Spherically interpolates between two vectors. */
            public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Spherically interpolates between two vectors. */
            public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
            /** Rotates a vector current towards target.
            * @param current The vector being managed.
            * @param target The vector.
            * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
            * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
            * @returns The location that RotateTowards generates. 
            */
            public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
            /** Linearly interpolates between two points.
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Value used to interpolate between a and b.
            * @returns Interpolated value, equals to a + (b - a) * t. 
            */
            public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Linearly interpolates between two vectors. */
            public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
            * @param current The position to move from.
            * @param target The position to move towards.
            * @param maxDistanceDelta Distance to move current per call.
            * @returns The new position. 
            */
            public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y and z components of an existing Vector3. */
            public Set ($newX: number, $newY: number, $newZ: number) : void
            /** Multiplies two vectors component-wise. */
            public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale ($scale: UnityEngine.Vector3) : void
            /** Cross Product of two vectors. */
            public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector3) : boolean
            /** Reflects a vector off the plane defined by a normal. */
            public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Makes this vector have a magnitude of 1. */
            public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
            public Normalize () : void
            /** Dot Product of two vectors. */
            public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
            /** Projects a vector onto another vector. */
            public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
            * @param planeNormal The direction from the vector towards the plane.
            * @param vector The location of the vector above the plane.
            * @returns The location of the vector on the plane. 
            */
            public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns the angle in degrees between from and to.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @param axis A vector around which the other vectors are rotated.
            */
            public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
            /** Returns the distance between a and b. */
            public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
            public static Magnitude ($vector: UnityEngine.Vector3) : number
            public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public ToString () : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Quaternions are used to represent rotations. */
        class Quaternion extends System.ValueType implements System.IEquatable$1<UnityEngine.Quaternion>, System.IFormattable
        {
        /** X component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
            public x : number/** Y component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
            public y : number/** Z component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
            public z : number/** W component of the Quaternion. Do not directly modify quaternions. */
            public w : number
            public static kEpsilon : number/** The identity rotation (Read Only). */
            public static get identity(): UnityEngine.Quaternion;
            /** Returns or sets the euler angle representation of the rotation. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** Returns this quaternion with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Quaternion;
            /** Creates a rotation which rotates from fromDirection to toDirection. */
            public static FromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Returns the Inverse of rotation. */
            public static Inverse ($rotation: UnityEngine.Quaternion) : UnityEngine.Quaternion
            /** Spherically interpolates between quaternions a and b by ratio t. The parameter t is clamped to the range [0, 1].
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Interpolation ratio.
            * @returns A quaternion spherically interpolated between quaternions a and b. 
            */
            public static Slerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Spherically interpolates between a and b by t. The parameter t is not clamped. */
            public static SlerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is clamped to the range [0, 1]. */
            public static Lerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is not clamped. */
            public static LerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Creates a rotation which rotates angle degrees around axis. */
            public static AngleAxis ($angle: number, $axis: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions. * @param forward The direction to look in.
            * @param upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3, $upwards: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions. * @param forward The direction to look in.
            * @param upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3) : UnityEngine.Quaternion
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y, z and w components of an existing Quaternion. */
            public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
            public static op_Multiply ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public static op_Multiply ($rotation: UnityEngine.Quaternion, $point: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            public static op_Inequality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            /** The dot product between two rotations. */
            public static Dot ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Creates a rotation with the specified forward and upwards directions. * @param view The direction to look in.
            * @param up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3) : void
            /** Creates a rotation with the specified forward and upwards directions. * @param view The direction to look in.
            * @param up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3, $up: UnityEngine.Vector3) : void
            /** Returns the angle in degrees between two rotations a and b. */
            public static Angle ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis; applied in that order. */
            public static Euler ($x: number, $y: number, $z: number) : UnityEngine.Quaternion
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis. */
            public static Euler ($euler: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Converts a rotation to angle-axis representation (angles in degrees). */
            public ToAngleAxis ($angle: $Ref<number>, $axis: $Ref<UnityEngine.Vector3>) : void
            /** Creates a rotation which rotates from fromDirection to toDirection. */
            public SetFromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : void
            /** Rotates a rotation from towards to. */
            public static RotateTowards ($from: UnityEngine.Quaternion, $to: UnityEngine.Quaternion, $maxDegreesDelta: number) : UnityEngine.Quaternion
            /** Converts this quaternion to one with the same orientation but with a magnitude of 1. */
            public static Normalize ($q: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public Normalize () : void
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Quaternion) : boolean
            public ToString () : string
            /** Returns a formatted string of the Quaternion. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string of the Quaternion. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Position, rotation and scale of an object. */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
        {
        /** The world space position of the Transform. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform. */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space. */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space. */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space. */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent. */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent. */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform. */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Returns the topmost transform in the hierarchy. */
            public get root(): UnityEngine.Transform;
            /** The number of children the parent Transform has. */
            public get childCount(): number;
            /** The global scale of the object (Read Only). */
            public get lossyScale(): UnityEngine.Vector3;
            /** Has the transform changed since the last time the flag was set to 'false'? */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure. */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure. */
            public get hierarchyCount(): number;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($p: UnityEngine.Transform) : void
            /** Set the parent of the transform. * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
            /** Sets the world space position and rotation of the Transform component. */
            public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Moves the transform in the direction and distance of translation. */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform in the direction and distance of translation. */
            public Translate ($translation: UnityEngine.Vector3) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate ($x: number, $y: number, $z: number) : void
            /** Moves the transform in the direction and distance of translation. */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
            * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
            */
            public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
            */
            public Rotate ($eulers: UnityEngine.Vector3) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
            * @param axis The axis to apply rotation to.
            * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
            * @param angle The degrees of rotation to apply.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
            public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform) : void
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3) : void
            /** Transforms direction from local space to world space. */
            public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms direction x, y, z from local space to world space. */
            public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms vector from local space to world space. */
            public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms vector x, y, z from local space to world space. */
            public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from local space to world space. */
            public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from local space to world space. */
            public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from world space to local space. */
            public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
            public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            public DetachChildren () : void
            public SetAsFirstSibling () : void
            public SetAsLastSibling () : void
            /** Sets the sibling index. * @param index Index to set.
            */
            public SetSiblingIndex ($index: number) : void
            public GetSiblingIndex () : number
            /** Finds a child by n and returns it.
            * @param n Name of child to be found.
            * @returns The returned child transform or null if no child is found. 
            */
            public Find ($n: string) : UnityEngine.Transform
            /** Is this transform a child of parent? */
            public IsChildOf ($parent: UnityEngine.Transform) : boolean
            public GetEnumerator () : System.Collections.IEnumerator
            /** Returns a transform child by index.
            * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
            * @returns Transform child by index. 
            */
            public GetChild ($index: number) : UnityEngine.Transform
        }
        /** Base class for everything attached to GameObjects. */
        class Component extends UnityEngine.Object
        {
        /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            /** The game object this component is attached to. A component is always attached to a game object. */
            public get gameObject(): UnityEngine.GameObject;
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Returns the component of Type type if the GameObject has one attached, null if it doesn't. Will also return disabled components. * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Gets the component of the specified type, if it exists.
            * @param type The type of the component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** Returns the component with name type if the GameObject has one attached, null if it doesn't. */
            public GetComponent ($type: string) : UnityEngine.Component
            public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param t The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject or any of its children. Works recursively. * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set? includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
            */
            public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns the component of Type type in the GameObject or any of its parents.
            * @param t The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInParent ($t: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
            */
            public CompareTag ($tag: string) : boolean
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public constructor ()
        }
        /** Bit mask that controls object destruction, saving and visibility in inspectors. */
        enum HideFlags
        { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        /** Representation of 2D vectors and points. */
        class Vector2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2>, System.IFormattable
        {
        /** X component of the vector. */
            public x : number/** Y component of the vector. */
            public y : number
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number/** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector2;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector2(0, 0). */
            public static get zero(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 1). */
            public static get one(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, 1). */
            public static get up(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, -1). */
            public static get down(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(-1, 0). */
            public static get left(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 0). */
            public static get right(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector2;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x and y components of an existing Vector2. */
            public Set ($newX: number, $newY: number) : void
            /** Linearly interpolates between vectors a and b by t. */
            public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Linearly interpolates between vectors a and b by t. */
            public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Moves a point current towards target. */
            public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
            /** Multiplies two vectors component-wise. */
            public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale ($scale: UnityEngine.Vector2) : void
            public Normalize () : void
            public ToString () : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector2) : boolean
            /** Reflects a vector off the vector defined by a normal. */
            public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
            * @param inDirection The input direction.
            * @returns The perpendicular direction. 
            */
            public static Perpendicular ($inDirection: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Dot Product of two vectors. */
            public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
            /** Returns the unsigned angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            */
            public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            */
            public static SignedAngle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Returns the distance between a and b. */
            public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
            public static SqrMagnitude ($a: UnityEngine.Vector2) : number
            public SqrMagnitude () : number
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
            public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
            public constructor ($x: number, $y: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Representation of four-dimensional vectors. */
        class Vector4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector4>, System.IFormattable
        {
            public static kEpsilon : number/** X component of the vector. */
            public x : number/** Y component of the vector. */
            public y : number/** Z component of the vector. */
            public z : number/** W component of the vector. */
            public w : number/** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector4;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector4(0,0,0,0). */
            public static get zero(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(1,1,1,1). */
            public static get one(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector4;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y, z and w components of an existing Vector4. */
            public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
            /** Linearly interpolates between two vectors. */
            public static Lerp ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4, $t: number) : UnityEngine.Vector4
            /** Linearly interpolates between two vectors. */
            public static LerpUnclamped ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4, $t: number) : UnityEngine.Vector4
            /** Moves a point current towards target. */
            public static MoveTowards ($current: UnityEngine.Vector4, $target: UnityEngine.Vector4, $maxDistanceDelta: number) : UnityEngine.Vector4
            /** Multiplies two vectors component-wise. */
            public static Scale ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale ($scale: UnityEngine.Vector4) : void
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector4) : boolean
            public static Normalize ($a: UnityEngine.Vector4) : UnityEngine.Vector4
            public Normalize () : void
            /** Dot Product of two vectors. */
            public static Dot ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : number
            /** Projects a vector onto another vector. */
            public static Project ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Returns the distance between a and b. */
            public static Distance ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : number
            public static Magnitude ($a: UnityEngine.Vector4) : number
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Addition ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Subtraction ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_UnaryNegation ($a: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Multiply ($a: UnityEngine.Vector4, $d: number) : UnityEngine.Vector4
            public static op_Multiply ($d: number, $a: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Division ($a: UnityEngine.Vector4, $d: number) : UnityEngine.Vector4
            public static op_Equality ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Vector3
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Vector2
            public ToString () : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static SqrMagnitude ($a: UnityEngine.Vector4) : number
            public SqrMagnitude () : number
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Representation of RGBA colors. */
        class Color extends System.ValueType implements System.IEquatable$1<UnityEngine.Color>, System.IFormattable
        {
        /** Red component of the color. */
            public r : number/** Green component of the color. */
            public g : number/** Blue component of the color. */
            public b : number/** Alpha component of the color (0 is transparent, 1 is opaque). */
            public a : number/** Solid red. RGBA is (1, 0, 0, 1). */
            public static get red(): UnityEngine.Color;
            /** Solid green. RGBA is (0, 1, 0, 1). */
            public static get green(): UnityEngine.Color;
            /** Solid blue. RGBA is (0, 0, 1, 1). */
            public static get blue(): UnityEngine.Color;
            /** Solid white. RGBA is (1, 1, 1, 1). */
            public static get white(): UnityEngine.Color;
            /** Solid black. RGBA is (0, 0, 0, 1). */
            public static get black(): UnityEngine.Color;
            /** Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at! */
            public static get yellow(): UnityEngine.Color;
            /** Cyan. RGBA is (0, 1, 1, 1). */
            public static get cyan(): UnityEngine.Color;
            /** Magenta. RGBA is (1, 0, 1, 1). */
            public static get magenta(): UnityEngine.Color;
            /** Gray. RGBA is (0.5, 0.5, 0.5, 1). */
            public static get gray(): UnityEngine.Color;
            /** English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1). */
            public static get grey(): UnityEngine.Color;
            /** Completely transparent. RGBA is (0, 0, 0, 0). */
            public static get clear(): UnityEngine.Color;
            /** The grayscale value of the color. (Read Only) */
            public get grayscale(): number;
            /** A linear value of an sRGB color. */
            public get linear(): UnityEngine.Color;
            /** A version of the color that has had the gamma curve applied. */
            public get gamma(): UnityEngine.Color;
            /** Returns the maximum color component value: Max(r,g,b). */
            public get maxColorComponent(): number;
            public ToString () : string
            /** Returns a formatted string of this color. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string of this color. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Color) : boolean
            public static op_Addition ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Subtraction ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Multiply ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Multiply ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
            public static op_Multiply ($b: number, $a: UnityEngine.Color) : UnityEngine.Color
            public static op_Division ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
            public static op_Equality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
            public static op_Inequality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
            /** Linearly interpolates between colors a and b by t. * @param a Color a.
            * @param b Color b.
            * @param t Float for combining a and b.
            */
            public static Lerp ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
            /** Linearly interpolates between colors a and b by t. */
            public static LerpUnclamped ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
            public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Color
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Calculates the hue, saturation and value of an RGB input color. * @param rgbColor An input color.
            * @param H Output variable for hue.
            * @param S Output variable for saturation.
            * @param V Output variable for value.
            */
            public static RGBToHSV ($rgbColor: UnityEngine.Color, $H: $Ref<number>, $S: $Ref<number>, $V: $Ref<number>) : void
            /** Creates an RGB colour from HSV input.
            * @param H Hue [0..1].
            * @param S Saturation [0..1].
            * @param V Brightness value [0..1].
            * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
            * @returns An opaque colour with HSV matching the input. 
            */
            public static HSVToRGB ($H: number, $S: number, $V: number) : UnityEngine.Color
            /** Creates an RGB colour from HSV input.
            * @param H Hue [0..1].
            * @param S Saturation [0..1].
            * @param V Brightness value [0..1].
            * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
            * @returns An opaque colour with HSV matching the input. 
            */
            public static HSVToRGB ($H: number, $S: number, $V: number, $hdr: boolean) : UnityEngine.Color
            public constructor ($r: number, $g: number, $b: number, $a: number)
            public constructor ($r: number, $g: number, $b: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Representation of rays. */
        class Ray extends System.ValueType implements System.IFormattable
        {
        /** The origin point of the ray. */
            public get origin(): UnityEngine.Vector3;
            public set origin(value: UnityEngine.Vector3);
            /** The direction of the ray. */
            public get direction(): UnityEngine.Vector3;
            public set direction(value: UnityEngine.Vector3);
            /** Returns a point at distance units along the ray. */
            public GetPoint ($distance: number) : UnityEngine.Vector3
            public ToString () : string
            /** Returns a formatted string for this ray. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this ray. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3)
            public constructor ()
        }
        /** Represents an axis aligned bounding box. */
        class Bounds extends System.ValueType implements System.IEquatable$1<UnityEngine.Bounds>, System.IFormattable
        {
        /** The center of the bounding box. */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The total size of the box. This is always twice as large as the extents. */
            public get size(): UnityEngine.Vector3;
            public set size(value: UnityEngine.Vector3);
            /** The extents of the Bounding Box. This is always half of the size of the Bounds. */
            public get extents(): UnityEngine.Vector3;
            public set extents(value: UnityEngine.Vector3);
            /** The minimal point of the box. This is always equal to center-extents. */
            public get min(): UnityEngine.Vector3;
            public set min(value: UnityEngine.Vector3);
            /** The maximal point of the box. This is always equal to center+extents. */
            public get max(): UnityEngine.Vector3;
            public set max(value: UnityEngine.Vector3);
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Bounds) : boolean
            public static op_Equality ($lhs: UnityEngine.Bounds, $rhs: UnityEngine.Bounds) : boolean
            public static op_Inequality ($lhs: UnityEngine.Bounds, $rhs: UnityEngine.Bounds) : boolean
            /** Sets the bounds to the min and max value of the box. */
            public SetMinMax ($min: UnityEngine.Vector3, $max: UnityEngine.Vector3) : void
            /** Grows the Bounds to include the point. */
            public Encapsulate ($point: UnityEngine.Vector3) : void
            /** Grow the bounds to encapsulate the bounds. */
            public Encapsulate ($bounds: UnityEngine.Bounds) : void
            /** Expand the bounds by increasing its size by amount along each side. */
            public Expand ($amount: number) : void
            /** Expand the bounds by increasing its size by amount along each side. */
            public Expand ($amount: UnityEngine.Vector3) : void
            /** Does another bounding box intersect with this bounding box? */
            public Intersects ($bounds: UnityEngine.Bounds) : boolean
            /** Does ray intersect this bounding box? */
            public IntersectRay ($ray: UnityEngine.Ray) : boolean
            /** Does ray intersect this bounding box? */
            public IntersectRay ($ray: UnityEngine.Ray, $distance: $Ref<number>) : boolean
            public ToString () : string
            /** Returns a formatted string for the bounds. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for the bounds. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Is point contained in the bounding box? */
            public Contains ($point: UnityEngine.Vector3) : boolean
            /** The smallest squared distance between the point and this bounding box. */
            public SqrDistance ($point: UnityEngine.Vector3) : number
            /** The closest point on the bounding box.
            * @param point Arbitrary point.
            * @returns The point on the bounding box or inside the bounding box. 
            */
            public ClosestPoint ($point: UnityEngine.Vector3) : UnityEngine.Vector3
            public constructor ($center: UnityEngine.Vector3, $size: UnityEngine.Vector3)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** A ray in 2D space. */
        class Ray2D extends System.ValueType implements System.IFormattable
        {
        /** The starting point of the ray in world space. */
            public get origin(): UnityEngine.Vector2;
            public set origin(value: UnityEngine.Vector2);
            /** The direction of the ray in world space. */
            public get direction(): UnityEngine.Vector2;
            public set direction(value: UnityEngine.Vector2);
            /** Get a point that lies a given distance along a ray. * @param distance Distance of the desired point along the path of the ray.
            */
            public GetPoint ($distance: number) : UnityEngine.Vector2
            public ToString () : string
            /** Returns a formatted string for this 2D ray. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this 2D ray. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($origin: UnityEngine.Vector2, $direction: UnityEngine.Vector2)
            public constructor ()
        }
        /** Provides an interface to get time information from Unity. */
        class Time extends System.Object
        {
        /** The time at the beginning of this frame (Read Only). */
            public static get time(): number;
            /** The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get timeAsDouble(): number;
            /** The time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
            public static get timeSinceLevelLoad(): number;
            /** The double precision time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
            public static get timeSinceLevelLoadAsDouble(): number;
            /** The interval in seconds from the last frame to the current one (Read Only). */
            public static get deltaTime(): number;
            /** The time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTime(): number;
            /** The double precision time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTimeAsDouble(): number;
            /** The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTime(): number;
            /** The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTimeAsDouble(): number;
            /** The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTime(): number;
            /** The double precision timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTimeAsDouble(): number;
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
            public static get unscaledDeltaTime(): number;
            /** The timeScale-independent interval in seconds from the last MonoBehaviour.FixedUpdate phase to the current one (Read Only). */
            public static get fixedUnscaledDeltaTime(): number;
            /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames. */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only). */
            public static get smoothDeltaTime(): number;
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes. */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames since the start of the game (Read Only). */
            public static get frameCount(): number;
            public static get renderedFrameCount(): number;
            /** The real time in seconds since the game started (Read Only). */
            public static get realtimeSinceStartup(): number;
            /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup.  */
            public static get realtimeSinceStartupAsDouble(): number;
            /** Slows your application’s playback time to allow Unity to save screenshots in between frames. */
            public static get captureDeltaTime(): number;
            public static set captureDeltaTime(value: number);
            /** The reciprocal of Time.captureDeltaTime. */
            public static get captureFramerate(): number;
            public static set captureFramerate(value: number);
            /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false. */
            public static get inFixedTimeStep(): boolean;
            public constructor ()
        }
        /** Base class for all entities in Unity Scenes. */
        class GameObject extends UnityEngine.Object
        {
        /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            /** The layer the game object is in. */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only) */
            public get activeSelf(): boolean;
            /** Defines whether the GameObject is active in the Scene. */
            public get activeInHierarchy(): boolean;
            /** Gets and sets the GameObject's StaticEditorFlags. */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of. */
            public get scene(): UnityEngine.SceneManagement.Scene;
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
            public get sceneCullingMask(): bigint;
            public get gameObject(): UnityEngine.GameObject;
            /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
            */
            public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Returns the component with name type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            /** Gets the component of the specified type, if it exists.
            * @param type The type of component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
            */
            public static FindWithTag ($tag: string) : UnityEngine.GameObject
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
            public AddComponent ($componentType: System.Type) : UnityEngine.Component
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
            */
            public SetActive ($value: boolean) : void
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
            */
            public CompareTag ($tag: string) : boolean
            public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
            */
            public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage ($methodName: string) : void
            /** Finds a GameObject by name and returns it. */
            public static Find ($name: string) : UnityEngine.GameObject
            public constructor ($name: string)
            public constructor ()
            public constructor ($name: string, ...components: System.Type[])
        }
        /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
        enum PrimitiveType
        { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        /** Options for how to send a message. */
        enum SendMessageOptions
        { RequireReceiver = 0, DontRequireReceiver = 1 }
        /** Behaviours are Components that can be enabled or disabled. */
        class Behaviour extends UnityEngine.Component
        {
        /** Enabled Behaviours are Updated, disabled Behaviours are not. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Has the Behaviour had active and enabled called? */
            public get isActiveAndEnabled(): boolean;
            public constructor ()
        }
        /** A standard 4x4 transformation matrix. */
        class Matrix4x4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Matrix4x4>, System.IFormattable
        {
        }
        /** The coordinate space in which to operate. */
        enum Space
        { World = 0, Self = 1 }
        /** The Resources class allows you to find and access Objects including assets. */
        class Resources extends System.Object
        {
        /** Returns a list of all objects of Type type. */
            public static FindObjectsOfTypeAll ($type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
            * @param path Path to the target resource to load.
            * @param systemTypeInstance Type filter for objects returned.
            * @returns The requested asset returned as an Object. 
            */
            public static Load ($path: string) : UnityEngine.Object
            /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
            * @param path Path to the target resource to load.
            * @param systemTypeInstance Type filter for objects returned.
            * @returns The requested asset returned as an Object. 
            */
            public static Load ($path: string, $systemTypeInstance: System.Type) : UnityEngine.Object
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
            */
            public static LoadAsync ($path: string) : UnityEngine.ResourceRequest
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
            * @param systemTypeInstance Type filter for objects returned.
            */
            public static LoadAsync ($path: string, $type: System.Type) : UnityEngine.ResourceRequest
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
            * @param systemTypeInstance Type filter for objects returned.
            */
            public static LoadAll ($path: string, $systemTypeInstance: System.Type) : System.Array$1<UnityEngine.Object>
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
            */
            public static LoadAll ($path: string) : System.Array$1<UnityEngine.Object>
            public static GetBuiltinResource ($type: System.Type, $path: string) : UnityEngine.Object
            /** Unloads assetToUnload from memory. */
            public static UnloadAsset ($assetToUnload: UnityEngine.Object) : void
            public static UnloadUnusedAssets () : UnityEngine.AsyncOperation
            /** Translates an instance ID to an object reference.
            * @param instanceID Instance ID of an Object.
            * @returns Resolved reference or null if the instance ID didn't match anything. 
            */
            public static InstanceIDToObject ($instanceID: number) : UnityEngine.Object
            public static InstanceIDToObjectList ($instanceIDs: Unity.Collections.NativeArray$1<number>, $objects: System.Collections.Generic.List$1<UnityEngine.Object>) : void
            public constructor ()
        }
        /** Asynchronous load request from the Resources bundle. */
        class ResourceRequest extends UnityEngine.AsyncOperation
        {
        }
        /** Asynchronous operation coroutine. */
        class AsyncOperation extends UnityEngine.YieldInstruction
        {
        }
        /** Base class for all yield instructions. */
        class YieldInstruction extends System.Object
        {
        }
        /** Text file assets. */
        class TextAsset extends UnityEngine.Object
        {
        /** The raw bytes of the text asset. (Read Only) */
            public get bytes(): System.Array$1<number>;
            /** The text contents of the file as a string. (Read Only) */
            public get text(): string;
            public constructor ()
            public constructor ($text: string)
        }
        /** A single keyframe that can be injected into an animation curve. */
        class Keyframe extends System.ValueType
        {
        /** The time of the keyframe. */
            public get time(): number;
            public set time(value: number);
            /** The value of the curve at keyframe. */
            public get value(): number;
            public set value(value: number);
            /** Sets the incoming tangent for this key. The incoming tangent affects the slope of the curve from the previous key to this key. */
            public get inTangent(): number;
            public set inTangent(value: number);
            /** Sets the outgoing tangent for this key. The outgoing tangent affects the slope of the curve from this key to the next key. */
            public get outTangent(): number;
            public set outTangent(value: number);
            /** Sets the incoming weight for this key. The incoming weight affects the slope of the curve from the previous key to this key. */
            public get inWeight(): number;
            public set inWeight(value: number);
            /** Sets the outgoing weight for this key. The outgoing weight affects the slope of the curve from this key to the next key. */
            public get outWeight(): number;
            public set outWeight(value: number);
            /** Weighted mode for the keyframe. */
            public get weightedMode(): UnityEngine.WeightedMode;
            public set weightedMode(value: UnityEngine.WeightedMode);
            public constructor ($time: number, $value: number)
            public constructor ($time: number, $value: number, $inTangent: number, $outTangent: number)
            public constructor ($time: number, $value: number, $inTangent: number, $outTangent: number, $inWeight: number, $outWeight: number)
            public constructor ()
        }
        /** Sets which weights to use when calculating curve segments. */
        enum WeightedMode
        { None = 0, In = 1, Out = 2, Both = 3 }
        /** Store a collection of Keyframes that can be evaluated over time. */
        class AnimationCurve extends System.Object implements System.IEquatable$1<UnityEngine.AnimationCurve>
        {
        /** All keys defined in the animation curve. */
            public get keys(): System.Array$1<UnityEngine.Keyframe>;
            public set keys(value: System.Array$1<UnityEngine.Keyframe>);
            /** The number of keys in the curve. (Read Only) */
            public get length(): number;
            /** The behaviour of the animation before the first keyframe. */
            public get preWrapMode(): UnityEngine.WrapMode;
            public set preWrapMode(value: UnityEngine.WrapMode);
            /** The behaviour of the animation after the last keyframe. */
            public get postWrapMode(): UnityEngine.WrapMode;
            public set postWrapMode(value: UnityEngine.WrapMode);
            /** Evaluate the curve at time.
            * @param time The time within the curve you want to evaluate (the horizontal axis in the curve graph).
            * @returns The value of the curve, at the point in time specified. 
            */
            public Evaluate ($time: number) : number
            /** Add a new key to the curve.
            * @param time The time at which to add the key (horizontal axis in the curve graph).
            * @param value The value for the key (vertical axis in the curve graph).
            * @returns The index of the added key, or -1 if the key could not be added. 
            */
            public AddKey ($time: number, $value: number) : number
            /** Add a new key to the curve.
            * @param key The key to add to the curve.
            * @returns The index of the added key, or -1 if the key could not be added. 
            */
            public AddKey ($key: UnityEngine.Keyframe) : number
            /** Removes the keyframe at index and inserts key.
            * @param index The index of the key to move.
            * @param key The key (with its new time) to insert.
            * @returns The index of the keyframe after moving it. 
            */
            public MoveKey ($index: number, $key: UnityEngine.Keyframe) : number
            /** Removes a key. * @param index The index of the key to remove.
            */
            public RemoveKey ($index: number) : void
            public get_Item ($index: number) : UnityEngine.Keyframe
            /** Smooth the in and out tangents of the keyframe at index. * @param index The index of the keyframe to be smoothed.
            * @param weight The smoothing weight to apply to the keyframe's tangents.
            */
            public SmoothTangents ($index: number, $weight: number) : void
            /** Creates a constant "curve" starting at timeStart, ending at timeEnd and with the value value.
            * @param timeStart The start time for the constant curve.
            * @param timeEnd The start time for the constant curve.
            * @param value The value for the constant curve.
            * @returns The constant curve created from the specified values. 
            */
            public static Constant ($timeStart: number, $timeEnd: number, $value: number) : UnityEngine.AnimationCurve
            /** A straight Line starting at timeStart, valueStart and ending at timeEnd, valueEnd.
            * @param timeStart The start time for the linear curve.
            * @param valueStart The start value for the linear curve.
            * @param timeEnd The end time for the linear curve.
            * @param valueEnd The end value for the linear curve.
            * @returns The linear curve created from the specified values. 
            */
            public static Linear ($timeStart: number, $valueStart: number, $timeEnd: number, $valueEnd: number) : UnityEngine.AnimationCurve
            /** Creates an ease-in and out curve starting at timeStart, valueStart and ending at timeEnd, valueEnd.
            * @param timeStart The start time for the ease curve.
            * @param valueStart The start value for the ease curve.
            * @param timeEnd The end time for the ease curve.
            * @param valueEnd The end value for the ease curve.
            * @returns The ease-in and out curve generated from the specified values. 
            */
            public static EaseInOut ($timeStart: number, $valueStart: number, $timeEnd: number, $valueEnd: number) : UnityEngine.AnimationCurve
            public Equals ($o: any) : boolean
            public Equals ($other: UnityEngine.AnimationCurve) : boolean
            public constructor (...keys: UnityEngine.Keyframe[])
            public constructor ()
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        /** Determines how time is treated outside of the keyframed range of an AnimationClip or AnimationCurve. */
        enum WrapMode
        { Once = 1, Loop = 2, PingPong = 4, Default = 0, ClampForever = 8, Clamp = 1 }
        /** Stores keyframe based animations. */
        class AnimationClip extends UnityEngine.Motion
        {
        /** Animation length in seconds. (Read Only) */
            public get length(): number;
            /** Frame rate at which keyframes are sampled. (Read Only) */
            public get frameRate(): number;
            public set frameRate(value: number);
            /** Sets the default wrap mode used in the animation state. */
            public get wrapMode(): UnityEngine.WrapMode;
            public set wrapMode(value: UnityEngine.WrapMode);
            /** AABB of this Animation Clip in local space of Animation component that it is attached too. */
            public get localBounds(): UnityEngine.Bounds;
            public set localBounds(value: UnityEngine.Bounds);
            /** Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ). */
            public get legacy(): boolean;
            public set legacy(value: boolean);
            /** Returns true if the animation contains curve that drives a humanoid rig. */
            public get humanMotion(): boolean;
            /** Returns true if the animation clip has no curves and no events. */
            public get empty(): boolean;
            /** Returns true if the Animation has animation on the root transform. */
            public get hasGenericRootTransform(): boolean;
            /** Returns true if the AnimationClip has editor curves for its root motion. */
            public get hasMotionFloatCurves(): boolean;
            /** Returns true if the AnimationClip has root motion curves. */
            public get hasMotionCurves(): boolean;
            /** Returns true if the AnimationClip has root Curves. */
            public get hasRootCurves(): boolean;
            /** Animation Events for this animation clip. */
            public get events(): System.Array$1<UnityEngine.AnimationEvent>;
            public set events(value: System.Array$1<UnityEngine.AnimationEvent>);
            /** Samples an animation at a given time for any animated properties. * @param go The animated game object.
            * @param time The time to sample an animation.
            */
            public SampleAnimation ($go: UnityEngine.GameObject, $time: number) : void
            /** Assigns the curve to animate a specific property. * @param relativePath Path to the game object this curve applies to. The relativePath
            is formatted similar to a pathname, e.g. "rootspineleftArm".  If relativePath
            is empty it refers to the game object the animation clip is attached to.
            * @param type The class type of the component that is animated.
            * @param propertyName The name or path to the property being animated.
            * @param curve The animation curve.
            */
            public SetCurve ($relativePath: string, $type: System.Type, $propertyName: string, $curve: UnityEngine.AnimationCurve) : void
            public EnsureQuaternionContinuity () : void
            public ClearCurves () : void
            /** Adds an animation event to the clip. * @param evt AnimationEvent to add.
            */
            public AddEvent ($evt: UnityEngine.AnimationEvent) : void
            public constructor ()
        }
        /** Base class for AnimationClips and BlendTrees. */
        class Motion extends UnityEngine.Object
        {
        }
        /** AnimationEvent lets you call a script function similar to SendMessage as part of playing back an animation. */
        class AnimationEvent extends System.Object
        {
        }
        /** MonoBehaviour is the base class from which every Unity script derives. */
        class MonoBehaviour extends UnityEngine.Behaviour
        {
        /** Disabling this lets you skip the GUI layout phase. */
            public get useGUILayout(): boolean;
            public set useGUILayout(value: boolean);
            /** Allow a specific instance of a MonoBehaviour to run in edit mode (only available in the editor). */
            public get runInEditMode(): boolean;
            public set runInEditMode(value: boolean);
            public IsInvoking () : boolean
            public CancelInvoke () : void
            /** Invokes the method methodName in time seconds. */
            public Invoke ($methodName: string, $time: number) : void
            /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds. */
            public InvokeRepeating ($methodName: string, $time: number, $repeatRate: number) : void
            /** Cancels all Invoke calls with name methodName on this behaviour. */
            public CancelInvoke ($methodName: string) : void
            /** Is any invoke on methodName pending? */
            public IsInvoking ($methodName: string) : boolean
            /** Starts a coroutine named methodName. */
            public StartCoroutine ($methodName: string) : UnityEngine.Coroutine
            /** Starts a coroutine named methodName. */
            public StartCoroutine ($methodName: string, $value: any) : UnityEngine.Coroutine
            /** Starts a Coroutine. */
            public StartCoroutine ($routine: System.Collections.IEnumerator) : UnityEngine.Coroutine
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($routine: System.Collections.IEnumerator) : void
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($routine: UnityEngine.Coroutine) : void
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($methodName: string) : void
            public StopAllCoroutines () : void
            /** Logs message to the Unity Console (identical to Debug.Log). */
            public static print ($message: any) : void
            public constructor ()
        }
        /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions. */
        class Coroutine extends UnityEngine.YieldInstruction
        {
        }
        /** Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation. */
        class ParticleSystem extends UnityEngine.Component
        {
        /** Determines whether the Particle System is playing. */
            public get isPlaying(): boolean;
            /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play. */
            public get isEmitting(): boolean;
            /** Determines whether the Particle System is in the stopped state. */
            public get isStopped(): boolean;
            /** Determines whether the Particle System is paused. */
            public get isPaused(): boolean;
            /** The current number of particles (Read Only). */
            public get particleCount(): number;
            /** Playback position in seconds. */
            public get time(): number;
            public set time(value: number);
            /** Override the random seed used for the Particle System emission. */
            public get randomSeed(): number;
            public set randomSeed(value: number);
            /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator. */
            public get useAutoRandomSeed(): boolean;
            public set useAutoRandomSeed(value: boolean);
            /** Does this system support Procedural Simulation? */
            public get proceduralSimulationSupported(): boolean;
            /** Access the main Particle System settings. */
            public get main(): UnityEngine.ParticleSystem.MainModule;
            /** Script interface for the EmissionModule of a Particle System. */
            public get emission(): UnityEngine.ParticleSystem.EmissionModule;
            /** Script interface for the ShapeModule of a Particle System.  */
            public get shape(): UnityEngine.ParticleSystem.ShapeModule;
            /** Script interface for the VelocityOverLifetimeModule of a Particle System. */
            public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. . */
            public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            /** Script interface for the InheritVelocityModule of a Particle System. */
            public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
            /** Script interface for the Particle System Lifetime By Emitter Speed module. */
            public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
            /** Script interface for the ForceOverLifetimeModule of a Particle System. */
            public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            /** Script interface for the ColorOverLifetimeModule of a Particle System. */
            public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            /** Script interface for the ColorByLifetimeModule of a Particle System. */
            public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
            /** Script interface for the SizeOverLifetimeModule of a Particle System.  */
            public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            /** Script interface for the SizeBySpeedModule of a Particle System. */
            public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
            /** Script interface for the RotationOverLifetimeModule of a Particle System. */
            public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            /** Script interface for the RotationBySpeedModule of a Particle System. */
            public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
            /** Script interface for the ExternalForcesModule of a Particle System. */
            public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
            /** Script interface for the NoiseModule of a Particle System. */
            public get noise(): UnityEngine.ParticleSystem.NoiseModule;
            /** Script interface for the CollisionModule of a Particle System. */
            public get collision(): UnityEngine.ParticleSystem.CollisionModule;
            /** Script interface for the TriggerModule of a Particle System. */
            public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
            /** Script interface for the SubEmittersModule of a Particle System. */
            public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
            /** Script interface for the TextureSheetAnimationModule of a Particle System. */
            public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            /** Script interface for the LightsModule of a Particle System. */
            public get lights(): UnityEngine.ParticleSystem.LightsModule;
            /** Script interface for the TrailsModule of a Particle System. */
            public get trails(): UnityEngine.ParticleSystem.TrailModule;
            /** Script interface for the CustomDataModule of a Particle System. */
            public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : void
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : number
            public SetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : void
            public GetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : number
            public GetPlaybackState () : UnityEngine.ParticleSystem.PlaybackState
            public SetPlaybackState ($playbackState: UnityEngine.ParticleSystem.PlaybackState) : void
            public GetTrails () : UnityEngine.ParticleSystem.Trails
            public GetTrails ($trailData: $Ref<UnityEngine.ParticleSystem.Trails>) : number
            public SetTrails ($trailData: UnityEngine.ParticleSystem.Trails) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean, $restart: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number) : void
            /** Starts the Particle System. * @param withChildren Play all child Particle Systems as well.
            */
            public Play ($withChildren: boolean) : void
            public Play () : void
            /** Pauses the system so no new particles are emitted and the existing particles are not updated. * @param withChildren Pause all child Particle Systems as well.
            */
            public Pause ($withChildren: boolean) : void
            public Pause () : void
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
            * @param stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop ($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior) : void
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
            * @param stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop ($withChildren: boolean) : void
            public Stop () : void
            /** Remove all particles in the Particle System. * @param withChildren Clear all child Particle Systems as well.
            */
            public Clear ($withChildren: boolean) : void
            public Clear () : void
            /** Does the Particle System contain any live particles, or will it produce more?
            * @param withChildren Check all child Particle Systems as well.
            * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
            */
            public IsAlive ($withChildren: boolean) : boolean
            public IsAlive () : boolean
            /** Emit count particles immediately. * @param count Number of particles to emit.
            */
            public Emit ($count: number) : void
            public Emit ($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number) : void
            /** Triggers the specified sub emitter on all particles of the Particle System. * @param subEmitterIndex Index of the sub emitter to trigger.
            */
            public TriggerSubEmitter ($subEmitterIndex: number) : void
            public TriggerSubEmitter ($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>) : void
            public TriggerSubEmitter ($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>) : void
            public static ResetPreMappedBufferMemory () : void
            /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems. * @param vertexBuffersCount The maximum number of cached vertex buffers.
            * @param indexBuffersCount The maximum number of cached index buffers.
            */
            public static SetMaximumPreMappedBufferCounts ($vertexBuffersCount: number, $indexBuffersCount: number) : void
            public AllocateAxisOfRotationAttribute () : void
            public AllocateMeshIndexAttribute () : void
            /** Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated. * @param stream The custom data stream to allocate.
            */
            public AllocateCustomDataAttribute ($stream: UnityEngine.ParticleSystemCustomData) : void
            public constructor ()
        }
        /** Representation of RGBA colors in 32 bit format. */
        class Color32 extends System.ValueType implements System.IFormattable
        {
        }
        /** The space to simulate particles in. */
        enum ParticleSystemSimulationSpace
        { Local = 0, World = 1, Custom = 2 }
        /** Control how particle systems apply transform scale. */
        enum ParticleSystemScalingMode
        { Hierarchy = 0, Local = 1, Shape = 2 }
        /** Which stream of custom particle data to set. */
        enum ParticleSystemCustomData
        { Custom1 = 0, Custom2 = 1 }
        /** The behavior to apply when calling ParticleSystem.Stop|Stop. */
        enum ParticleSystemStopBehavior
        { StopEmittingAndClear = 0, StopEmitting = 1 }
        /** The Skinned Mesh filter. */
        class SkinnedMeshRenderer extends UnityEngine.Renderer
        {
        /** The maximum number of bones per vertex that are taken into account during skinning. */
            public get quality(): UnityEngine.SkinQuality;
            public set quality(value: UnityEngine.SkinQuality);
            /** If enabled, the Skinned Mesh will be updated when offscreen. If disabled, this also disables updating animations. */
            public get updateWhenOffscreen(): boolean;
            public set updateWhenOffscreen(value: boolean);
            /** Forces the Skinned Mesh to recalculate its matricies when rendered */
            public get forceMatrixRecalculationPerRender(): boolean;
            public set forceMatrixRecalculationPerRender(value: boolean);
            public get rootBone(): UnityEngine.Transform;
            public set rootBone(value: UnityEngine.Transform);
            /** The bones used to skin the mesh. */
            public get bones(): System.Array$1<UnityEngine.Transform>;
            public set bones(value: System.Array$1<UnityEngine.Transform>);
            /** The mesh used for skinning. */
            public get sharedMesh(): UnityEngine.Mesh;
            public set sharedMesh(value: UnityEngine.Mesh);
            /** Specifies whether skinned motion vectors should be used for this renderer. */
            public get skinnedMotionVectors(): boolean;
            public set skinnedMotionVectors(value: boolean);
            /** AABB of this Skinned Mesh in its local space. */
            public get localBounds(): UnityEngine.Bounds;
            public set localBounds(value: UnityEngine.Bounds);
            /** Returns the weight of a BlendShape for this Renderer.
            * @param index The index of the BlendShape whose weight you want to retrieve. Index must be smaller than the Mesh.blendShapeCount of the Mesh attached to this Renderer.
            * @returns The weight of the BlendShape. 
            */
            public GetBlendShapeWeight ($index: number) : number
            /** Sets the weight of a BlendShape for this Renderer. * @param index The index of the BlendShape to modify. Index must be smaller than the Mesh.blendShapeCount of the Mesh attached to this Renderer.
            * @param value The weight for this BlendShape.
            */
            public SetBlendShapeWeight ($index: number, $value: number) : void
            /** Creates a snapshot of SkinnedMeshRenderer and stores it in mesh. * @param mesh A static mesh that will receive the snapshot of the skinned mesh.
            * @param useScale Whether to use the SkinnedMeshRenderer's Transform scale when baking the Mesh. If this is true, Unity bakes the Mesh using the position, rotation, and scale values from the SkinnedMeshRenderer's Transform. If this is false, Unity bakes the Mesh using the position and rotation values from the SkinnedMeshRenderer's Transform, but without using the scale value from the SkinnedMeshRenderer's Transform. The default value is false.
            */
            public BakeMesh ($mesh: UnityEngine.Mesh) : void
            /** Creates a snapshot of SkinnedMeshRenderer and stores it in mesh. * @param mesh A static mesh that will receive the snapshot of the skinned mesh.
            * @param useScale Whether to use the SkinnedMeshRenderer's Transform scale when baking the Mesh. If this is true, Unity bakes the Mesh using the position, rotation, and scale values from the SkinnedMeshRenderer's Transform. If this is false, Unity bakes the Mesh using the position and rotation values from the SkinnedMeshRenderer's Transform, but without using the scale value from the SkinnedMeshRenderer's Transform. The default value is false.
            */
            public BakeMesh ($mesh: UnityEngine.Mesh, $useScale: boolean) : void
            public constructor ()
        }
        /** General functionality for all renderers. */
        class Renderer extends UnityEngine.Component
        {
        /** The bounding volume of the renderer (Read Only). */
            public get bounds(): UnityEngine.Bounds;
            /** Makes the rendered 3D object visible if enabled. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Is this renderer visible in any camera? (Read Only) */
            public get isVisible(): boolean;
            /** Does this object cast shadows? */
            public get shadowCastingMode(): UnityEngine.Rendering.ShadowCastingMode;
            public set shadowCastingMode(value: UnityEngine.Rendering.ShadowCastingMode);
            /** Does this object receive shadows? */
            public get receiveShadows(): boolean;
            public set receiveShadows(value: boolean);
            /** Allows turning off rendering for a specific component. */
            public get forceRenderingOff(): boolean;
            public set forceRenderingOff(value: boolean);
            /** Specifies the mode for motion vector rendering. */
            public get motionVectorGenerationMode(): UnityEngine.MotionVectorGenerationMode;
            public set motionVectorGenerationMode(value: UnityEngine.MotionVectorGenerationMode);
            /** The light probe interpolation type. */
            public get lightProbeUsage(): UnityEngine.Rendering.LightProbeUsage;
            public set lightProbeUsage(value: UnityEngine.Rendering.LightProbeUsage);
            /** Should reflection probes be used for this Renderer? */
            public get reflectionProbeUsage(): UnityEngine.Rendering.ReflectionProbeUsage;
            public set reflectionProbeUsage(value: UnityEngine.Rendering.ReflectionProbeUsage);
            /** Determines which rendering layer this renderer lives on. */
            public get renderingLayerMask(): number;
            public set renderingLayerMask(value: number);
            /** This value sorts renderers by priority. Lower values are rendered first and higher values are rendered last. */
            public get rendererPriority(): number;
            public set rendererPriority(value: number);
            /** Describes how this renderer is updated for ray tracing. */
            public get rayTracingMode(): UnityEngine.Experimental.Rendering.RayTracingMode;
            public set rayTracingMode(value: UnityEngine.Experimental.Rendering.RayTracingMode);
            /** Name of the Renderer's sorting layer. */
            public get sortingLayerName(): string;
            public set sortingLayerName(value: string);
            /** Unique ID of the Renderer's sorting layer. */
            public get sortingLayerID(): number;
            public set sortingLayerID(value: number);
            /** Renderer's order within a sorting layer. */
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            /** Controls if dynamic occlusion culling should be performed for this renderer. */
            public get allowOcclusionWhenDynamic(): boolean;
            public set allowOcclusionWhenDynamic(value: boolean);
            /** Indicates whether the renderer is part of a with other renderers. */
            public get isPartOfStaticBatch(): boolean;
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** If set, the Renderer will use the Light Probe Proxy Volume component attached to the source GameObject. */
            public get lightProbeProxyVolumeOverride(): UnityEngine.GameObject;
            public set lightProbeProxyVolumeOverride(value: UnityEngine.GameObject);
            /** If set, Renderer will use this Transform's position to find the light or reflection probe. */
            public get probeAnchor(): UnityEngine.Transform;
            public set probeAnchor(value: UnityEngine.Transform);
            /** The index of the baked lightmap applied to this renderer. */
            public get lightmapIndex(): number;
            public set lightmapIndex(value: number);
            /** The index of the realtime lightmap applied to this renderer. */
            public get realtimeLightmapIndex(): number;
            public set realtimeLightmapIndex(value: number);
            /** The UV scale & offset used for a lightmap. */
            public get lightmapScaleOffset(): UnityEngine.Vector4;
            public set lightmapScaleOffset(value: UnityEngine.Vector4);
            /** The UV scale & offset used for a realtime lightmap. */
            public get realtimeLightmapScaleOffset(): UnityEngine.Vector4;
            public set realtimeLightmapScaleOffset(value: UnityEngine.Vector4);
            /** Returns all the instantiated materials of this object. */
            public get materials(): System.Array$1<UnityEngine.Material>;
            public set materials(value: System.Array$1<UnityEngine.Material>);
            /** Returns the first instantiated Material assigned to the renderer. */
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            /** The shared material of this object. */
            public get sharedMaterial(): UnityEngine.Material;
            public set sharedMaterial(value: UnityEngine.Material);
            /** All the shared materials of this object. */
            public get sharedMaterials(): System.Array$1<UnityEngine.Material>;
            public set sharedMaterials(value: System.Array$1<UnityEngine.Material>);
            public HasPropertyBlock () : boolean
            /** Lets you set or clear per-renderer or per-material parameter overrides. * @param properties Property block with values you want to override.
            * @param materialIndex The index of the Material you want to override the parameters of. The index ranges from 0 to Renderer.sharedMaterial.Length-1.
            */
            public SetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock) : void
            /** Lets you set or clear per-renderer or per-material parameter overrides. * @param properties Property block with values you want to override.
            * @param materialIndex The index of the Material you want to override the parameters of. The index ranges from 0 to Renderer.sharedMaterial.Length-1.
            */
            public SetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock, $materialIndex: number) : void
            /** Get per-Renderer or per-Material property block. * @param properties Material parameters to retrieve.
            * @param materialIndex The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
            */
            public GetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock) : void
            /** Get per-Renderer or per-Material property block. * @param properties Material parameters to retrieve.
            * @param materialIndex The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
            */
            public GetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock, $materialIndex: number) : void
            public GetMaterials ($m: System.Collections.Generic.List$1<UnityEngine.Material>) : void
            public GetSharedMaterials ($m: System.Collections.Generic.List$1<UnityEngine.Material>) : void
            public GetClosestReflectionProbes ($result: System.Collections.Generic.List$1<UnityEngine.Rendering.ReflectionProbeBlendInfo>) : void
            public constructor ()
        }
        /** The maximum number of bones affecting a single vertex. */
        enum SkinQuality
        { Auto = 0, Bone1 = 1, Bone2 = 2, Bone4 = 4 }
        /** A class that allows you to create or modify meshes. */
        class Mesh extends UnityEngine.Object
        {
        }
        /** A block of material values to apply. */
        class MaterialPropertyBlock extends System.Object
        {
        }
        /** The type of motion vectors that should be generated. */
        enum MotionVectorGenerationMode
        { Camera = 0, Object = 1, ForceNoMotion = 2 }
        /** The material class. */
        class Material extends UnityEngine.Object
        {
        }
        /** Simple access to web pages. */
        class WWW extends UnityEngine.CustomYieldInstruction implements System.Collections.IEnumerator, System.IDisposable
        {
        /** Streams an AssetBundle that can contain any kind of asset from the project folder. */
            public get assetBundle(): UnityEngine.AssetBundle;
            /** Returns the contents of the fetched web page as a byte array (Read Only). */
            public get bytes(): System.Array$1<number>;
            /** The number of bytes downloaded by this WWW query (read only). */
            public get bytesDownloaded(): number;
            /** Returns an error message if there was an error during the download (Read Only). */
            public get error(): string;
            /** Is the download already finished? (Read Only) */
            public get isDone(): boolean;
            /** How far has the download progressed (Read Only). */
            public get progress(): number;
            /** Dictionary of headers returned by the request. */
            public get responseHeaders(): System.Collections.Generic.Dictionary$2<string, string>;
            /** Returns the contents of the fetched web page as a string (Read Only). */
            public get text(): string;
            /** Returns a Texture2D generated from the downloaded data (Read Only). */
            public get texture(): UnityEngine.Texture2D;
            /** Returns a non-readable Texture2D generated from the downloaded data (Read Only). */
            public get textureNonReadable(): UnityEngine.Texture2D;
            /** Obsolete, has no effect. */
            public get threadPriority(): UnityEngine.ThreadPriority;
            public set threadPriority(value: UnityEngine.ThreadPriority);
            /** How far has the upload progressed (Read Only). */
            public get uploadProgress(): number;
            /** The URL of this WWW request (Read Only). */
            public get url(): string;
            public get keepWaiting(): boolean;
            /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
            * @param e The text encoding to use.
            */
            public static EscapeURL ($s: string) : string
            /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
            * @param e The text encoding to use.
            */
            public static EscapeURL ($s: string, $e: System.Text.Encoding) : string
            /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
            * @param e The text encoding to use.
            */
            public static UnEscapeURL ($s: string) : string
            /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
            * @param e The text encoding to use.
            */
            public static UnEscapeURL ($s: string, $e: System.Text.Encoding) : string
            /** Loads an AssetBundle with the specified version number from the cache. If the AssetBundle is not currently cached, it will automatically be downloaded and stored in the cache for future retrieval from local storage.
            * @param url The URL to download the AssetBundle from, if it is not present in the cache. Must be '%' escaped.
            * @param version Version of the AssetBundle. The file will only be loaded from the disk cache if it has previously been downloaded with the same version parameter. By incrementing the version number requested by your application, you can force Caching to download a new copy of the AssetBundle from url.
            * @param hash Hash128 which is used as the version of the AssetBundle.
            * @param cachedBundle A structure used to download a given version of AssetBundle to a customized cache path.
            Analogous to the cachedAssetBundle parameter for UnityWebRequestAssetBundle.GetAssetBundle.</param>
            * @param crc An optional CRC-32 Checksum of the uncompressed contents. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match. You can use this to avoid data corruption from bad downloads or users tampering with the cached files on disk. If the CRC does not match, Unity will try to redownload the data, and if the CRC on the server does not match it will fail with an error. Look at the error string returned to see the correct CRC value to use for an AssetBundle.
            * @returns A WWW instance, which can be used to access the data once the load/download operation is completed. 
            */
            public static LoadFromCacheOrDownload ($url: string, $version: number) : UnityEngine.WWW
            /** Loads an AssetBundle with the specified version number from the cache. If the AssetBundle is not currently cached, it will automatically be downloaded and stored in the cache for future retrieval from local storage.
            * @param url The URL to download the AssetBundle from, if it is not present in the cache. Must be '%' escaped.
            * @param version Version of the AssetBundle. The file will only be loaded from the disk cache if it has previously been downloaded with the same version parameter. By incrementing the version number requested by your application, you can force Caching to download a new copy of the AssetBundle from url.
            * @param hash Hash128 which is used as the version of the AssetBundle.
            * @param cachedBundle A structure used to download a given version of AssetBundle to a customized cache path.
            Analogous to the cachedAssetBundle parameter for UnityWebRequestAssetBundle.GetAssetBundle.</param>
            * @param crc An optional CRC-32 Checksum of the uncompressed contents. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match. You can use this to avoid data corruption from bad downloads or users tampering with the cached files on disk. If the CRC does not match, Unity will try to redownload the data, and if the CRC on the server does not match it will fail with an error. Look at the error string returned to see the correct CRC value to use for an AssetBundle.
            * @returns A WWW instance, which can be used to access the data once the load/download operation is completed. 
            */
            public static LoadFromCacheOrDownload ($url: string, $version: number, $crc: number) : UnityEngine.WWW
            public static LoadFromCacheOrDownload ($url: string, $hash: UnityEngine.Hash128) : UnityEngine.WWW
            /** Loads an AssetBundle with the specified version number from the cache. If the AssetBundle is not currently cached, it will automatically be downloaded and stored in the cache for future retrieval from local storage.
            * @param url The URL to download the AssetBundle from, if it is not present in the cache. Must be '%' escaped.
            * @param version Version of the AssetBundle. The file will only be loaded from the disk cache if it has previously been downloaded with the same version parameter. By incrementing the version number requested by your application, you can force Caching to download a new copy of the AssetBundle from url.
            * @param hash Hash128 which is used as the version of the AssetBundle.
            * @param cachedBundle A structure used to download a given version of AssetBundle to a customized cache path.
            Analogous to the cachedAssetBundle parameter for UnityWebRequestAssetBundle.GetAssetBundle.</param>
            * @param crc An optional CRC-32 Checksum of the uncompressed contents. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match. You can use this to avoid data corruption from bad downloads or users tampering with the cached files on disk. If the CRC does not match, Unity will try to redownload the data, and if the CRC on the server does not match it will fail with an error. Look at the error string returned to see the correct CRC value to use for an AssetBundle.
            * @returns A WWW instance, which can be used to access the data once the load/download operation is completed. 
            */
            public static LoadFromCacheOrDownload ($url: string, $hash: UnityEngine.Hash128, $crc: number) : UnityEngine.WWW
            /** Loads an AssetBundle with the specified version number from the cache. If the AssetBundle is not currently cached, it will automatically be downloaded and stored in the cache for future retrieval from local storage.
            * @param url The URL to download the AssetBundle from, if it is not present in the cache. Must be '%' escaped.
            * @param version Version of the AssetBundle. The file will only be loaded from the disk cache if it has previously been downloaded with the same version parameter. By incrementing the version number requested by your application, you can force Caching to download a new copy of the AssetBundle from url.
            * @param hash Hash128 which is used as the version of the AssetBundle.
            * @param cachedBundle A structure used to download a given version of AssetBundle to a customized cache path.
            Analogous to the cachedAssetBundle parameter for UnityWebRequestAssetBundle.GetAssetBundle.</param>
            * @param crc An optional CRC-32 Checksum of the uncompressed contents. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match. You can use this to avoid data corruption from bad downloads or users tampering with the cached files on disk. If the CRC does not match, Unity will try to redownload the data, and if the CRC on the server does not match it will fail with an error. Look at the error string returned to see the correct CRC value to use for an AssetBundle.
            * @returns A WWW instance, which can be used to access the data once the load/download operation is completed. 
            */
            public static LoadFromCacheOrDownload ($url: string, $cachedBundle: UnityEngine.CachedAssetBundle, $crc?: number) : UnityEngine.WWW
            /** Replaces the contents of an existing Texture2D with an image from the downloaded data. * @param tex An existing texture object to be overwritten with the image data.
            */
            public LoadImageIntoTexture ($texture: UnityEngine.Texture2D) : void
            public Dispose () : void
            public GetAudioClip () : UnityEngine.AudioClip
            /** OBSOLETE. Use UnityWebRequestMultimedia.GetAudioClip(). */
            public GetAudioClip ($threeD: boolean) : UnityEngine.AudioClip
            /** OBSOLETE. Use UnityWebRequestMultimedia.GetAudioClip(). */
            public GetAudioClip ($threeD: boolean, $stream: boolean) : UnityEngine.AudioClip
            /** OBSOLETE. Use UnityWebRequestMultimedia.GetAudioClip(). */
            public GetAudioClip ($threeD: boolean, $stream: boolean, $audioType: UnityEngine.AudioType) : UnityEngine.AudioClip
            public GetAudioClipCompressed () : UnityEngine.AudioClip
            /** OBSOLETE. Use UnityWebRequestMultimedia.GetAudioClip(). */
            public GetAudioClipCompressed ($threeD: boolean) : UnityEngine.AudioClip
            /** OBSOLETE. Use UnityWebRequestMultimedia.GetAudioClip(). */
            public GetAudioClipCompressed ($threeD: boolean, $audioType: UnityEngine.AudioType) : UnityEngine.AudioClip
            public constructor ($url: string)
            public constructor ($url: string, $form: UnityEngine.WWWForm)
            public constructor ($url: string, $postData: System.Array$1<number>)
            public constructor ($url: string, $postData: System.Array$1<number>, $headers: System.Collections.Generic.Dictionary$2<string, string>)
            public constructor ()
        }
        /** Base class for custom yield instructions to suspend coroutines. */
        class CustomYieldInstruction extends System.Object implements System.Collections.IEnumerator
        {
        }
        /** Represents  a 128-bit hash value. */
        class Hash128 extends System.ValueType implements System.IComparable, System.IComparable$1<UnityEngine.Hash128>, System.IEquatable$1<UnityEngine.Hash128>
        {
        }
        /** Data structure for downloading AssetBundles to a customized cache path. See Also:UnityWebRequestAssetBundle.GetAssetBundle for more information. */
        class CachedAssetBundle extends System.ValueType
        {
        }
        /** AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle. */
        class AssetBundle extends UnityEngine.Object
        {
        }
        /** Class that represents textures in C# code. */
        class Texture2D extends UnityEngine.Texture
        {
        }
        /** Base class for Texture handling. */
        class Texture extends UnityEngine.Object
        {
        }
        /** Priority of a thread. */
        enum ThreadPriority
        { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        /** A container for audio data. */
        class AudioClip extends UnityEngine.Object
        {
        }
        /** Type of the imported(native) data. */
        enum AudioType
        { UNKNOWN = 0, ACC = 1, AIFF = 2, IT = 10, MOD = 12, MPEG = 13, OGGVORBIS = 14, S3M = 17, WAV = 20, XM = 21, XMA = 22, VAG = 23, AUDIOQUEUE = 24 }
        /** MovieTexture has been removed. Use VideoPlayer instead. */
        class MovieTexture extends UnityEngine.Texture
        {
        }
        /** Helper class to generate form data to post to web servers using the UnityWebRequest or WWW classes. */
        class WWWForm extends System.Object
        {
        }
        /** Script interface for. */
        class Light extends UnityEngine.Behaviour
        {
        /** The type of the light. */
            public get type(): UnityEngine.LightType;
            public set type(value: UnityEngine.LightType);
            /** This property describes the shape of the spot light. Only Scriptable Render Pipelines use this property; the built-in renderer does not support it. */
            public get shape(): UnityEngine.LightShape;
            public set shape(value: UnityEngine.LightShape);
            /** The angle of the light's spotlight cone in degrees. */
            public get spotAngle(): number;
            public set spotAngle(value: number);
            /** The angle of the light's spotlight inner cone in degrees. */
            public get innerSpotAngle(): number;
            public set innerSpotAngle(value: number);
            /** The color of the light. */
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            /** 
            The color temperature of the light.
            Correlated Color Temperature (abbreviated as CCT) is multiplied with the color filter when calculating the final color of a light source. The color temperature of the electromagnetic radiation emitted from an ideal black body is defined as its surface temperature in Kelvin. White is 6500K according to the D65 standard. A candle light is 1800K and a soft warm light bulb is 2700K.
            If you want to use colorTemperature, GraphicsSettings.lightsUseLinearIntensity and Light.useColorTemperature has to be enabled.
            See Also: GraphicsSettings.lightsUseLinearIntensity, GraphicsSettings.useColorTemperature.
            */
            public get colorTemperature(): number;
            public set colorTemperature(value: number);
            /** Set to true to use the color temperature. */
            public get useColorTemperature(): boolean;
            public set useColorTemperature(value: boolean);
            /** The Intensity of a light is multiplied with the Light color. */
            public get intensity(): number;
            public set intensity(value: number);
            /** The multiplier that defines the strength of the bounce lighting. */
            public get bounceIntensity(): number;
            public set bounceIntensity(value: number);
            /** Set to true to override light bounding sphere for culling. */
            public get useBoundingSphereOverride(): boolean;
            public set useBoundingSphereOverride(value: boolean);
            /** Bounding sphere used to override the regular light bounding sphere during culling. */
            public get boundingSphereOverride(): UnityEngine.Vector4;
            public set boundingSphereOverride(value: UnityEngine.Vector4);
            /** Whether to cull shadows for this Light when the Light is outside of the view frustum. */
            public get useViewFrustumForShadowCasterCull(): boolean;
            public set useViewFrustumForShadowCasterCull(value: boolean);
            /** The custom resolution of the shadow map. */
            public get shadowCustomResolution(): number;
            public set shadowCustomResolution(value: number);
            /** Shadow mapping constant bias. */
            public get shadowBias(): number;
            public set shadowBias(value: number);
            /** Shadow mapping normal-based bias. */
            public get shadowNormalBias(): number;
            public set shadowNormalBias(value: number);
            /** Near plane value to use for shadow frustums. */
            public get shadowNearPlane(): number;
            public set shadowNearPlane(value: number);
            /** Set to true to enable custom matrix for culling during shadows. */
            public get useShadowMatrixOverride(): boolean;
            public set useShadowMatrixOverride(value: boolean);
            /** Projection matrix used to override the regular light matrix during shadow culling. */
            public get shadowMatrixOverride(): UnityEngine.Matrix4x4;
            public set shadowMatrixOverride(value: UnityEngine.Matrix4x4);
            /** The range of the light. */
            public get range(): number;
            public set range(value: number);
            /** The to use for this light. */
            public get flare(): UnityEngine.Flare;
            public set flare(value: UnityEngine.Flare);
            /** This property describes the output of the last Global Illumination bake. */
            public get bakingOutput(): UnityEngine.LightBakingOutput;
            public set bakingOutput(value: UnityEngine.LightBakingOutput);
            /** This is used to light certain objects in the Scene selectively. */
            public get cullingMask(): number;
            public set cullingMask(value: number);
            /** Determines which rendering LayerMask this Light affects. */
            public get renderingLayerMask(): number;
            public set renderingLayerMask(value: number);
            /** Allows you to override the global Shadowmask Mode per light. Only use this with render pipelines that can handle per light Shadowmask modes. Incompatible with the legacy renderers. */
            public get lightShadowCasterMode(): UnityEngine.LightShadowCasterMode;
            public set lightShadowCasterMode(value: UnityEngine.LightShadowCasterMode);
            /** Controls the amount of artificial softening applied to the edges of shadows cast by the Point or Spot light. */
            public get shadowRadius(): number;
            public set shadowRadius(value: number);
            /** Controls the amount of artificial softening applied to the edges of shadows cast by directional lights. */
            public get shadowAngle(): number;
            public set shadowAngle(value: number);
            /** How this light casts shadows */
            public get shadows(): UnityEngine.LightShadows;
            public set shadows(value: UnityEngine.LightShadows);
            /** Strength of light's shadows. */
            public get shadowStrength(): number;
            public set shadowStrength(value: number);
            /** The resolution of the shadow map. */
            public get shadowResolution(): UnityEngine.Rendering.LightShadowResolution;
            public set shadowResolution(value: UnityEngine.Rendering.LightShadowResolution);
            /** Per-light, per-layer shadow culling distances. Directional lights only.  */
            public get layerShadowCullDistances(): System.Array$1<number>;
            public set layerShadowCullDistances(value: System.Array$1<number>);
            /** The size of a directional light's cookie. */
            public get cookieSize(): number;
            public set cookieSize(value: number);
            /** The cookie texture projected by the light. */
            public get cookie(): UnityEngine.Texture;
            public set cookie(value: UnityEngine.Texture);
            /** How to render the light. */
            public get renderMode(): UnityEngine.LightRenderMode;
            public set renderMode(value: UnityEngine.LightRenderMode);
            /** The size of the area light (Editor only). */
            public get areaSize(): UnityEngine.Vector2;
            public set areaSize(value: UnityEngine.Vector2);
            /** This property describes what part of a light's contribution can be baked (Editor only). */
            public get lightmapBakeType(): UnityEngine.LightmapBakeType;
            public set lightmapBakeType(value: UnityEngine.LightmapBakeType);
            /** Number of command buffers set up on this light (Read Only). */
            public get commandBufferCount(): number;
            public Reset () : void
            public SetLightDirty () : void
            /** Add a command buffer to be executed at a specified place. * @param evt When to execute the command buffer during rendering.
            * @param buffer The buffer to execute.
            * @param shadowPassMask A mask specifying which shadow passes to execute the buffer for.
            */
            public AddCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Add a command buffer to be executed at a specified place. * @param evt When to execute the command buffer during rendering.
            * @param buffer The buffer to execute.
            * @param shadowPassMask A mask specifying which shadow passes to execute the buffer for.
            */
            public AddCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $shadowPassMask: UnityEngine.Rendering.ShadowMapPass) : void
            /** Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point. * @param evt The point during the graphics processing at which this command buffer should commence on the GPU.
            * @param buffer The buffer to execute.
            * @param queueType The desired async compute queue type to execute the buffer on.
            * @param shadowPassMask A mask specifying which shadow passes to execute the buffer for.
            */
            public AddCommandBufferAsync ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $queueType: UnityEngine.Rendering.ComputeQueueType) : void
            /** Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point. * @param evt The point during the graphics processing at which this command buffer should commence on the GPU.
            * @param buffer The buffer to execute.
            * @param queueType The desired async compute queue type to execute the buffer on.
            * @param shadowPassMask A mask specifying which shadow passes to execute the buffer for.
            */
            public AddCommandBufferAsync ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $shadowPassMask: UnityEngine.Rendering.ShadowMapPass, $queueType: UnityEngine.Rendering.ComputeQueueType) : void
            /** Remove command buffer from execution at a specified place. * @param evt When to execute the command buffer during rendering.
            * @param buffer The buffer to execute.
            */
            public RemoveCommandBuffer ($evt: UnityEngine.Rendering.LightEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Remove command buffers from execution at a specified place. * @param evt When to execute the command buffer during rendering.
            */
            public RemoveCommandBuffers ($evt: UnityEngine.Rendering.LightEvent) : void
            public RemoveAllCommandBuffers () : void
            /** Get command buffers to be executed at a specified place.
            * @param evt When to execute the command buffer during rendering.
            * @returns Array of command buffers. 
            */
            public GetCommandBuffers ($evt: UnityEngine.Rendering.LightEvent) : System.Array$1<UnityEngine.Rendering.CommandBuffer>
            public static GetLights ($type: UnityEngine.LightType, $layer: number) : System.Array$1<UnityEngine.Light>
            public constructor ()
        }
        /** The type of a Light. */
        enum LightType
        { Spot = 0, Directional = 1, Point = 2, Area = 3, Rectangle = 3, Disc = 4 }
        /** Describes the shape of a spot light. */
        enum LightShape
        { Cone = 0, Pyramid = 1, Box = 2 }
        /** A flare asset. Read more about flares in the. */
        class Flare extends UnityEngine.Object
        {
        }
        /** Struct describing the result of a Global Illumination bake for a given light. */
        class LightBakingOutput extends System.ValueType
        {
        }
        /** Allows mixed lights to control shadow caster culling when Shadowmasks are present. */
        enum LightShadowCasterMode
        { Default = 0, NonLightmappedOnly = 1, Everything = 2 }
        /** Shadow casting options for a Light. */
        enum LightShadows
        { None = 0, Hard = 1, Soft = 2 }
        /** How the Light is rendered. */
        enum LightRenderMode
        { Auto = 0, ForcePixel = 1, ForceVertex = 2 }
        /** Enum describing what part of a light contribution can be baked. */
        enum LightmapBakeType
        { Realtime = 4, Baked = 2, Mixed = 1 }
        enum LightmappingMode
        { Realtime = 4, Baked = 2, Mixed = 1 }
        /** A collection of common math functions. */
        class Mathf extends System.ValueType
        {
        /** The well-known 3.14159265358979... value (Read Only). */
            public static PI : number/** A representation of positive infinity (Read Only). */
            public static Infinity : number/** A representation of negative infinity (Read Only). */
            public static NegativeInfinity : number/** Degrees-to-radians conversion constant (Read Only). */
            public static Deg2Rad : number/** Radians-to-degrees conversion constant (Read Only). */
            public static Rad2Deg : number/** A tiny floating point value (Read Only). */
            public static Epsilon : number/** Returns the closest power of two value. */
            public static ClosestPowerOfTwo ($value: number) : number
            /** Returns true if the value is power of two. */
            public static IsPowerOfTwo ($value: number) : boolean
            /** Returns the next power of two that is equal to, or greater than, the argument. */
            public static NextPowerOfTwo ($value: number) : number
            /** Converts the given value from gamma (sRGB) to linear color space. */
            public static GammaToLinearSpace ($value: number) : number
            /** Converts the given value from linear to gamma (sRGB) color space. */
            public static LinearToGammaSpace ($value: number) : number
            /** Convert a color temperature in Kelvin to RGB color.
            * @param kelvin Temperature in Kelvin. Range 1000 to 40000 Kelvin.
            * @returns Correlated Color Temperature as floating point RGB color. 
            */
            public static CorrelatedColorTemperatureToRGB ($kelvin: number) : UnityEngine.Color
            /** Encode a floating point value into a 16-bit representation.
            * @param val The floating point value to convert.
            * @returns The converted half-precision float, stored in a 16-bit unsigned integer. 
            */
            public static FloatToHalf ($val: number) : number
            /** Convert a half precision float to a 32-bit floating point value.
            * @param val The half precision value to convert.
            * @returns The decoded 32-bit float. 
            */
            public static HalfToFloat ($val: number) : number
            /** Generate 2D Perlin noise.
            * @param x X-coordinate of sample point.
            * @param y Y-coordinate of sample point.
            * @returns Value between 0.0 and 1.0. (Return value might be slightly below 0.0 or beyond 1.0.) 
            */
            public static PerlinNoise ($x: number, $y: number) : number
            /** Returns the sine of angle f.
            * @param f The input angle, in radians.
            * @returns The return value between -1 and +1. 
            */
            public static Sin ($f: number) : number
            /** Returns the cosine of angle f.
            * @param f The input angle, in radians.
            * @returns The return value between -1 and 1. 
            */
            public static Cos ($f: number) : number
            /** Returns the tangent of angle f in radians. */
            public static Tan ($f: number) : number
            /** Returns the arc-sine of f - the angle in radians whose sine is f. */
            public static Asin ($f: number) : number
            /** Returns the arc-cosine of f - the angle in radians whose cosine is f. */
            public static Acos ($f: number) : number
            /** Returns the arc-tangent of f - the angle in radians whose tangent is f. */
            public static Atan ($f: number) : number
            /** Returns the angle in radians whose Tan is y/x. */
            public static Atan2 ($y: number, $x: number) : number
            /** Returns square root of f. */
            public static Sqrt ($f: number) : number
            /** Returns the absolute value of f. */
            public static Abs ($f: number) : number
            /** Returns the absolute value of value. */
            public static Abs ($value: number) : number
            /** Returns the smallest of two or more values. */
            public static Min ($a: number, $b: number) : number
            /** Returns the smallest of two or more values. */
            public static Min (...values: number[]) : number
            /** Returns largest of two or more values. */
            public static Max ($a: number, $b: number) : number
            /** Returns largest of two or more values. */
            public static Max (...values: number[]) : number
            /** Returns f raised to power p. */
            public static Pow ($f: number, $p: number) : number
            /** Returns e raised to the specified power. */
            public static Exp ($power: number) : number
            /** Returns the logarithm of a specified number in a specified base. */
            public static Log ($f: number, $p: number) : number
            /** Returns the natural (base e) logarithm of a specified number. */
            public static Log ($f: number) : number
            /** Returns the base 10 logarithm of a specified number. */
            public static Log10 ($f: number) : number
            /** Returns the smallest integer greater to or equal to f. */
            public static Ceil ($f: number) : number
            /** Returns the largest integer smaller than or equal to f. */
            public static Floor ($f: number) : number
            /** Returns f rounded to the nearest integer. */
            public static Round ($f: number) : number
            /** Returns the smallest integer greater to or equal to f. */
            public static CeilToInt ($f: number) : number
            /** Returns the largest integer smaller to or equal to f. */
            public static FloorToInt ($f: number) : number
            /** Returns f rounded to the nearest integer. */
            public static RoundToInt ($f: number) : number
            /** Returns the sign of f. */
            public static Sign ($f: number) : number
            /** Clamps the given value between the given minimum float and maximum float values.  Returns the given value if it is within the min and max range.
            * @param value The floating point value to restrict inside the range defined by the min and max values.
            * @param min The minimum floating point value to compare against.
            * @param max The maximum floating point value to compare against.
            * @returns The float result between the min and max values. 
            */
            public static Clamp ($value: number, $min: number, $max: number) : number
            /** Clamps value between 0 and 1 and returns value. */
            public static Clamp01 ($value: number) : number
            /** Linearly interpolates between a and b by t.
            * @param a The start value.
            * @param b The end value.
            * @param t The interpolation value between the two floats.
            * @returns The interpolated float result between the two float values. 
            */
            public static Lerp ($a: number, $b: number, $t: number) : number
            /** Linearly interpolates between a and b by t with no limit to t.
            * @param a The start value.
            * @param b The end value.
            * @param t The interpolation between the two floats.
            * @returns The float value as a result from the linear interpolation. 
            */
            public static LerpUnclamped ($a: number, $b: number, $t: number) : number
            /** Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees. */
            public static LerpAngle ($a: number, $b: number, $t: number) : number
            /** Moves a value current towards target. * @param current The current value.
            * @param target The value to move towards.
            * @param maxDelta The maximum change that should be applied to the value.
            */
            public static MoveTowards ($current: number, $target: number, $maxDelta: number) : number
            /** Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees. */
            public static MoveTowardsAngle ($current: number, $target: number, $maxDelta: number) : number
            /** Interpolates between min and max with smoothing at the limits. */
            public static SmoothStep ($from: number, $to: number, $t: number) : number
            public static Gamma ($value: number, $absmax: number, $gamma: number) : number
            /** Compares two floating point values and returns true if they are similar. */
            public static Approximately ($a: number, $b: number) : boolean
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
            /** Loops the value t, so that it is never larger than length and never smaller than 0. */
            public static Repeat ($t: number, $length: number) : number
            /** PingPong returns a value that will increment and decrement between the value 0 and length. */
            public static PingPong ($t: number, $length: number) : number
            /** Calculates the linear parameter t that produces the interpolant value within the range [a, b].
            * @param a Start value.
            * @param b End value.
            * @param value Value between start and end.
            * @returns Percentage of value between start and end. 
            */
            public static InverseLerp ($a: number, $b: number, $value: number) : number
            /** Calculates the shortest difference between two given angles given in degrees. */
            public static DeltaAngle ($current: number, $target: number) : number
        }
        /** Class containing methods to ease debugging while developing a game. */
        class Debug extends System.Object
        {
        /** Get default debug logger. */
            public static get unityLogger(): UnityEngine.ILogger;
            /** Reports whether the development console is visible. The development console cannot be made to appear using: */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build". */
            public static get isDebugBuild(): boolean;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : void
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3) : void
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            public static Break () : void
            public static DebugBreak () : void
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static Log ($message: any) : void
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static Log ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogError ($message: any) : void
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogError ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogErrorFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogErrorFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public static ClearDeveloperConsole () : void
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
            * @param exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception) : void
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
            * @param exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception, $context: UnityEngine.Object) : void
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogWarning ($message: any) : void
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogWarning ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogWarningFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogWarningFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean) : void
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $context: UnityEngine.Object) : void
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any) : void
            public static Assert ($condition: boolean, $message: string) : void
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any, $context: UnityEngine.Object) : void
            public static Assert ($condition: boolean, $message: string, $context: UnityEngine.Object) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $format: string, ...args: any[]) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogAssertion ($message: any) : void
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogAssertion ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogAssertionFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogAssertionFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public constructor ()
        }
        interface ILogger extends UnityEngine.ILogHandler
        {
        }
        interface ILogHandler
        {
        }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
        enum LogType
        { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Option flags for specifying special treatment of a log message. */
        enum LogOption
        { None = 0, NoStacktrace = 1 }
        /** A Canvas placable element that can be used to modify children Alpha, Raycasting, Enabled state. */
        class CanvasGroup extends UnityEngine.Behaviour implements UnityEngine.ICanvasRaycastFilter
        {
        }
        interface ICanvasRaycastFilter
        {
        }
        /** Position, size, anchor and pivot information for a rectangle. */
        class RectTransform extends UnityEngine.Transform implements System.Collections.IEnumerable
        {
        }
        /** Interface into the Input system. */
        class Input extends System.Object
        {
        /** Enables/Disables mouse simulation with touches. By default this option is enabled. */
            public static get simulateMouseWithTouches(): boolean;
            public static set simulateMouseWithTouches(value: boolean);
            /** Is any key or mouse button currently held down? (Read Only) */
            public static get anyKey(): boolean;
            /** Returns true the first frame the user hits any key or mouse button. (Read Only) */
            public static get anyKeyDown(): boolean;
            /** Returns the keyboard input entered this frame. (Read Only) */
            public static get inputString(): string;
            /** The current mouse position in pixel coordinates. (Read Only). */
            public static get mousePosition(): UnityEngine.Vector3;
            /** The current mouse scroll delta. (Read Only) */
            public static get mouseScrollDelta(): UnityEngine.Vector2;
            /** Controls enabling and disabling of IME input composition. */
            public static get imeCompositionMode(): UnityEngine.IMECompositionMode;
            public static set imeCompositionMode(value: UnityEngine.IMECompositionMode);
            /** The current IME composition string being typed by the user. */
            public static get compositionString(): string;
            /** Does the user have an IME keyboard input source selected? */
            public static get imeIsSelected(): boolean;
            /** The current text input position used by IMEs to open windows. */
            public static get compositionCursorPos(): UnityEngine.Vector2;
            public static set compositionCursorPos(value: UnityEngine.Vector2);
            /** Indicates if a mouse device is detected. */
            public static get mousePresent(): boolean;
            /** Number of touches. Guaranteed not to change throughout the frame. (Read Only) */
            public static get touchCount(): number;
            /** Bool value which let's users check if touch pressure is supported. */
            public static get touchPressureSupported(): boolean;
            /** Returns true when Stylus Touch is supported by a device or platform. */
            public static get stylusTouchSupported(): boolean;
            /** Returns whether the device on which application is currently running supports touch input. */
            public static get touchSupported(): boolean;
            /** Property indicating whether the system handles multiple touches. */
            public static get multiTouchEnabled(): boolean;
            public static set multiTouchEnabled(value: boolean);
            /** Device physical orientation as reported by OS. (Read Only) */
            public static get deviceOrientation(): UnityEngine.DeviceOrientation;
            /** Last measured linear acceleration of a device in three-dimensional space. (Read Only) */
            public static get acceleration(): UnityEngine.Vector3;
            /** This property controls if input sensors should be compensated for screen orientation. */
            public static get compensateSensors(): boolean;
            public static set compensateSensors(value: boolean);
            /** Number of acceleration measurements which occurred during last frame. */
            public static get accelerationEventCount(): number;
            /** Should  Back button quit the application?
            Only usable on Android, Windows Phone or Windows Tablets. */
            public static get backButtonLeavesApp(): boolean;
            public static set backButtonLeavesApp(value: boolean);
            /** Property for accessing device location (handheld devices only). (Read Only) */
            public static get location(): UnityEngine.LocationService;
            /** Property for accessing compass (handheld devices only). (Read Only) */
            public static get compass(): UnityEngine.Compass;
            /** Returns default gyroscope. */
            public static get gyro(): UnityEngine.Gyroscope;
            /** Returns list of objects representing status of all touches during last frame. (Read Only) (Allocates temporary variables). */
            public static get touches(): System.Array$1<UnityEngine.Touch>;
            /** Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables). */
            public static get accelerationEvents(): System.Array$1<UnityEngine.AccelerationEvent>;
            /** Returns the value of the virtual axis identified by axisName. */
            public static GetAxis ($axisName: string) : number
            /** Returns the value of the virtual axis identified by axisName with no smoothing filtering applied. */
            public static GetAxisRaw ($axisName: string) : number
            /** Returns true while the virtual button identified by buttonName is held down.
            * @param buttonName The name of the button such as Jump.
            * @returns True when an axis has been pressed and not released. 
            */
            public static GetButton ($buttonName: string) : boolean
            /** Returns true during the frame the user pressed down the virtual button identified by buttonName. */
            public static GetButtonDown ($buttonName: string) : boolean
            /** Returns true the first frame the user releases the virtual button identified by buttonName. */
            public static GetButtonUp ($buttonName: string) : boolean
            /** Returns whether the given mouse button is held down. */
            public static GetMouseButton ($button: number) : boolean
            /** Returns true during the frame the user pressed the given mouse button. */
            public static GetMouseButtonDown ($button: number) : boolean
            /** Returns true during the frame the user releases the given mouse button. */
            public static GetMouseButtonUp ($button: number) : boolean
            public static ResetInputAxes () : void
            /** Determine whether a particular joystick model has been preconfigured by Unity. (Linux-only).
            * @param joystickName The name of the joystick to check (returned by Input.GetJoystickNames).
            * @returns True if the joystick layout has been preconfigured; false otherwise. 
            */
            public static IsJoystickPreconfigured ($joystickName: string) : boolean
            public static GetJoystickNames () : System.Array$1<string>
            /** Call Input.GetTouch to obtain a Touch struct.
            * @param index The touch input on the device screen.
            * @returns Touch details in the struct. 
            */
            public static GetTouch ($index: number) : UnityEngine.Touch
            /** Returns specific acceleration measurement which occurred during last frame. (Does not allocate temporary variables). */
            public static GetAccelerationEvent ($index: number) : UnityEngine.AccelerationEvent
            /** Returns true while the user holds down the key identified by the key KeyCode enum parameter. */
            public static GetKey ($key: UnityEngine.KeyCode) : boolean
            /** Returns true while the user holds down the key identified by name. */
            public static GetKey ($name: string) : boolean
            /** Returns true during the frame the user releases the key identified by the key KeyCode enum parameter. */
            public static GetKeyUp ($key: UnityEngine.KeyCode) : boolean
            /** Returns true during the frame the user releases the key identified by name. */
            public static GetKeyUp ($name: string) : boolean
            /** Returns true during the frame the user starts pressing down the key identified by the key KeyCode enum parameter. */
            public static GetKeyDown ($key: UnityEngine.KeyCode) : boolean
            /** Returns true during the frame the user starts pressing down the key identified by name. */
            public static GetKeyDown ($name: string) : boolean
            public constructor ()
        }
        /** Structure describing the status of a finger touching the screen. */
        class Touch extends System.ValueType
        {
        }
        /** Structure describing acceleration status of the device. */
        class AccelerationEvent extends System.ValueType
        {
        }
        /** Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. */
        enum KeyCode
        { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        /** Controls IME input. */
        enum IMECompositionMode
        { Auto = 0, On = 1, Off = 2 }
        /** Describes physical orientation of the device as determined by the OS. */
        enum DeviceOrientation
        { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, FaceUp = 5, FaceDown = 6 }
        /** Provides methods that allow an application to access the device's location. */
        class LocationService extends System.Object
        {
        }
        /** Interface into compass functionality. */
        class Compass extends System.Object
        {
        }
        /** Interface into the Gyroscope. */
        class Gyroscope extends System.Object
        {
        }
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file. */
        class Scene extends System.ValueType
        {
        }
    }
    namespace Unity.Collections {
        class NativeArray$1<T> extends System.ValueType implements System.Collections.IEnumerable, System.IDisposable, System.IEquatable$1<Unity.Collections.NativeArray$1<T>>, System.Collections.Generic.IEnumerable$1<T>
        {
        }
    }
    namespace UnityEngine.ParticleSystem {
        class Particle extends System.ValueType
        {
        }
        class PlaybackState extends System.ValueType
        {
        }
        class Trails extends System.ValueType
        {
        }
        class EmitParams extends System.ValueType
        {
        }
        class MainModule extends System.ValueType
        {
        }
        class EmissionModule extends System.ValueType
        {
        }
        class ShapeModule extends System.ValueType
        {
        }
        class VelocityOverLifetimeModule extends System.ValueType
        {
        }
        class LimitVelocityOverLifetimeModule extends System.ValueType
        {
        }
        class InheritVelocityModule extends System.ValueType
        {
        }
        class LifetimeByEmitterSpeedModule extends System.ValueType
        {
        }
        class ForceOverLifetimeModule extends System.ValueType
        {
        }
        class ColorOverLifetimeModule extends System.ValueType
        {
        }
        class ColorBySpeedModule extends System.ValueType
        {
        }
        class SizeOverLifetimeModule extends System.ValueType
        {
        }
        class SizeBySpeedModule extends System.ValueType
        {
        }
        class RotationOverLifetimeModule extends System.ValueType
        {
        }
        class RotationBySpeedModule extends System.ValueType
        {
        }
        class ExternalForcesModule extends System.ValueType
        {
        }
        class NoiseModule extends System.ValueType
        {
        }
        class CollisionModule extends System.ValueType
        {
        }
        class TriggerModule extends System.ValueType
        {
        }
        class SubEmittersModule extends System.ValueType
        {
        }
        class TextureSheetAnimationModule extends System.ValueType
        {
        }
        class LightsModule extends System.ValueType
        {
        }
        class TrailModule extends System.ValueType
        {
        }
        class CustomDataModule extends System.ValueType
        {
        }
    }
    namespace UnityEngine.Rendering {
        /** How shadows are cast from this object. */
        enum ShadowCastingMode
        { Off = 0, On = 1, TwoSided = 2, ShadowsOnly = 3 }
        /** Light probe interpolation type. */
        enum LightProbeUsage
        { Off = 0, BlendProbes = 1, UseProxyVolume = 2, CustomProvided = 4 }
        /** Reflection Probe usage. */
        enum ReflectionProbeUsage
        { Off = 0, BlendProbes = 1, BlendProbesAndSkybox = 2, Simple = 3 }
        /** ReflectionProbeBlendInfo contains information required for blending probes. */
        class ReflectionProbeBlendInfo extends System.ValueType
        {
        }
        /** Shadow resolution options for a Light. */
        enum LightShadowResolution
        { FromQualitySettings = -1, Low = 0, Medium = 1, High = 2, VeryHigh = 3 }
        /** Defines a place in light's rendering to attach Rendering.CommandBuffer objects to. */
        enum LightEvent
        { BeforeShadowMap = 0, AfterShadowMap = 1, BeforeScreenspaceMask = 2, AfterScreenspaceMask = 3, BeforeShadowMapPass = 4, AfterShadowMapPass = 5 }
        /** List of graphics commands to execute. */
        class CommandBuffer extends System.Object implements System.IDisposable
        {
        }
        /** Allows precise control over which shadow map passes to execute Rendering.CommandBuffer objects attached using Light.AddCommandBuffer. */
        enum ShadowMapPass
        { PointlightPositiveX = 1, PointlightNegativeX = 2, PointlightPositiveY = 4, PointlightNegativeY = 8, PointlightPositiveZ = 16, PointlightNegativeZ = 32, DirectionalCascade0 = 64, DirectionalCascade1 = 128, DirectionalCascade2 = 256, DirectionalCascade3 = 512, Spotlight = 1024, Pointlight = 63, Directional = 960, All = 2047 }
        /** Describes the desired characteristics with respect to prioritisation and load balancing of the queue that a command buffer being submitted via Graphics.ExecuteCommandBufferAsync or [[ScriptableRenderContext.ExecuteCommandBufferAsync] should be sent to. */
        enum ComputeQueueType
        { Default = 0, Background = 1, Urgent = 2 }
    }
    namespace UnityEngine.Experimental.Rendering {
        /** Indicates how a Renderer is updated. */
        enum RayTracingMode
        { Off = 0, Static = 1, DynamicTransform = 2, DynamicGeometry = 3 }
    }
    namespace System.Text {
        class Encoding extends System.Object implements System.ICloneable
        {
        }
        class StringBuilder extends System.Object implements System.Runtime.Serialization.ISerializable
        {
            public get Capacity(): number;
            public set Capacity(value: number);
            public get MaxCapacity(): number;
            public get Length(): number;
            public set Length(value: number);
            public get Chars(): number;
            public set Chars(value: number);
            public EnsureCapacity ($capacity: number) : number
            public ToString () : string
            public ToString ($startIndex: number, $length: number) : string
            public Clear () : System.Text.StringBuilder
            public get_Chars ($index: number) : number
            public set_Chars ($index: number, $value: number) : void
            public Append ($value: number, $repeatCount: number) : System.Text.StringBuilder
            public Append ($value: System.Array$1<number>, $startIndex: number, $charCount: number) : System.Text.StringBuilder
            public Append ($value: string) : System.Text.StringBuilder
            public Append ($value: string, $startIndex: number, $count: number) : System.Text.StringBuilder
            public AppendLine () : System.Text.StringBuilder
            public AppendLine ($value: string) : System.Text.StringBuilder
            public CopyTo ($sourceIndex: number, $destination: System.Array$1<number>, $destinationIndex: number, $count: number) : void
            public Insert ($index: number, $value: string, $count: number) : System.Text.StringBuilder
            public Remove ($startIndex: number, $length: number) : System.Text.StringBuilder
            public Append ($value: boolean) : System.Text.StringBuilder
            public Append ($value: number) : System.Text.StringBuilder
            public Append ($value: bigint) : System.Text.StringBuilder
            public Append ($value: System.Decimal) : System.Text.StringBuilder
            public Append ($value: any) : System.Text.StringBuilder
            public Append ($value: System.Array$1<number>) : System.Text.StringBuilder
            public Insert ($index: number, $value: string) : System.Text.StringBuilder
            public Insert ($index: number, $value: boolean) : System.Text.StringBuilder
            public Insert ($index: number, $value: number) : System.Text.StringBuilder
            public Insert ($index: number, $value: System.Array$1<number>) : System.Text.StringBuilder
            public Insert ($index: number, $value: System.Array$1<number>, $startIndex: number, $charCount: number) : System.Text.StringBuilder
            public Insert ($index: number, $value: bigint) : System.Text.StringBuilder
            public Insert ($index: number, $value: System.Decimal) : System.Text.StringBuilder
            public Insert ($index: number, $value: any) : System.Text.StringBuilder
            public AppendFormat ($format: string, $arg0: any) : System.Text.StringBuilder
            public AppendFormat ($format: string, $arg0: any, $arg1: any) : System.Text.StringBuilder
            public AppendFormat ($format: string, $arg0: any, $arg1: any, $arg2: any) : System.Text.StringBuilder
            public AppendFormat ($format: string, ...args: any[]) : System.Text.StringBuilder
            public AppendFormat ($provider: System.IFormatProvider, $format: string, $arg0: any) : System.Text.StringBuilder
            public AppendFormat ($provider: System.IFormatProvider, $format: string, $arg0: any, $arg1: any) : System.Text.StringBuilder
            public AppendFormat ($provider: System.IFormatProvider, $format: string, $arg0: any, $arg1: any, $arg2: any) : System.Text.StringBuilder
            public AppendFormat ($provider: System.IFormatProvider, $format: string, ...args: any[]) : System.Text.StringBuilder
            public Replace ($oldValue: string, $newValue: string) : System.Text.StringBuilder
            public Equals ($sb: System.Text.StringBuilder) : boolean
            public Replace ($oldValue: string, $newValue: string, $startIndex: number, $count: number) : System.Text.StringBuilder
            public Replace ($oldChar: number, $newChar: number) : System.Text.StringBuilder
            public Replace ($oldChar: number, $newChar: number, $startIndex: number, $count: number) : System.Text.StringBuilder
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($value: string)
            public constructor ($value: string, $capacity: number)
            public constructor ($value: string, $startIndex: number, $length: number, $capacity: number)
            public constructor ($capacity: number, $maxCapacity: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
    }
    namespace System.Runtime.Serialization {
        interface IDeserializationCallback
        {
        }
        interface ISerializable
        {
        }
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>
        {
        }
    }
    namespace System.Collections.Generic.List$1 {
        class Enumerator<T> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<T>, System.Collections.IEnumerator, System.IDisposable
        {
        }
    }
        class Performance extends UnityEngine.MonoBehaviour
        {
            public btnLoadStack : UnityEngine.UI.Button
            public btnLoadRegister : UnityEngine.UI.Button
            public btnUnload : UnityEngine.UI.Button
            public panelTest : UnityEngine.CanvasGroup
            public panelButton : UnityEngine.RectTransform
            public lbResult : UnityEngine.UI.Text
            public LoadHotFixAssemblyStack () : void
            public LoadHotFixAssemblyRegister () : void
            public LoadLua () : void
            public LoadTS () : void
            public Unload () : void
            public static MandelbrotCheck ($workX: number, $workY: number) : boolean
            public static TestFunc1 ($a: number, $b: string, $d: UnityEngine.Transform) : void
            public constructor ()
        }
        namespace UnityEngine.UI {
        class Button extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
        {
        }
        class Selectable extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
        {
        }
        class Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable
        {
        }
        class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable
        {
        }
        class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement
        {
        }
        interface ICanvasElement
        {
        }
        interface IMaterialModifier
        {
        }
        interface IMaskable
        {
        }
        interface IClippable
        {
        }
        interface ILayoutElement
        {
        }
    }
    namespace UnityEngine.EventSystems {
        class UIBehaviour extends UnityEngine.MonoBehaviour
        {
        }
        interface IEventSystemHandler
        {
        }
        interface IPointerEnterHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface ISelectHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IPointerExitHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IDeselectHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IPointerDownHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IPointerUpHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface ISubmitHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
        interface IPointerClickHandler extends UnityEngine.EventSystems.IEventSystemHandler
        {
        }
    }
    namespace System.Security {
        interface IEvidenceFactory
        {
        }
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object implements System.ICloneable, System.IFormatProvider
        {
        }
    }
}
