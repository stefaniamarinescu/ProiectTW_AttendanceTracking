module.exports=(sequelize,DataType) =>{
    return sequelize.define(
        "Event",
        {
            name:{
                type:DataType.STRING,
                allowNull: false,
            },
            text:{
                type:DataType.STRING,
                allowNull: false,
            },
            isOpen:{
                type:DataType.BOOLEAN,
                allowNull: false,
            },
        },
        {
            tableName:"Event",
        }
    );
};