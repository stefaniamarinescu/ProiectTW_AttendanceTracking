module.exports=(sequelize,DataType) =>{
    return sequelize.define(
        "EventGroup",
        {
            name:{
                type:DataType.STRING,
                allowNull: false,
            },
        },
        {
            tableName:"EventGroup",
        }
    );
};