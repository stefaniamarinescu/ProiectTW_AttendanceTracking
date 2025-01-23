module.exports=(sequelize,DataType) =>{
    return sequelize.define(
        "User",
        {
            username:{
                type:DataType.STRING,
                allowNull: false,
            },
            password:{
                type:DataType.STRING,
                allowNull: false
            },
            lastName:{
                type:DataType.STRING,
                allowNull: false,
            },
            firstName:{
                type:DataType.STRING,
                allowNull: false,
            },
            email:{
                type:DataType.STRING,
                allowNull: false,
            },
            phone:{
                type:DataType.STRING,
                allowNull: false,
            },
            userType:{
                type:DataType.STRING,
                allowNull:false,
            }
        },
        {
            tableName:"User",
        }
    );
};