### 工厂模式
所有 “工厂” 都是用来封装对象的创建

#### 简单工厂
简单工厂其实不算一个设计模式，反而像是一种编程习惯

#### 工厂方法
工厂方法使用继承，父类定义为抽象类，提供创建对象的工厂方法（抽象方法），把对象的创建委托给子类，子类实现工厂方法来创建对象

#### 抽象工厂
抽象工厂提供一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类。抽象工厂其实是对接口的一种利用，接口里提供创建对象的所有方法