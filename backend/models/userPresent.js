module.exports=(sequelize,DataType) =>{
    return sequelize.define(
        "UserPresent",
        {
            lastName:{
                type:DataType.STRING,
                allowNull: false,
            },
            firstName:{
                type:DataType.STRING,
                allowNull: false
            },
            email:{
                type:DataType.STRING,
                allowNull: false,
            },
            phone:{
                type:DataType.STRING,
                allowNull: false,
            },
        },
        {
            tableName:"UserPresent",
        }
    );
};