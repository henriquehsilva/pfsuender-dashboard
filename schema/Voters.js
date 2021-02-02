cube(`Voters`, {
  sql: `SELECT * FROM public.voters`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, nickname, city, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    cpf: {
      sql: `cpf`,
      type: `string`
    },
    
    nickname: {
      sql: `nickname`,
      type: `string`
    },
    
    group: {
      sql: `group`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    number: {
      sql: `number`,
      type: `string`
    },
    
    complement: {
      sql: `complement`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    neighborhood: {
      sql: `neighborhood`,
      type: `string`
    },
    
    zipCode: {
      sql: `zip_code`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    telephone: {
      sql: `telephone`,
      type: `string`
    },
    
    typePhone: {
      sql: `type_phone`,
      type: `string`
    },
    
    operatorPhone: {
      sql: `operator_phone`,
      type: `string`
    },
    
    electoralZone: {
      sql: `electoral_zone`,
      type: `string`
    },
    
    maritalStatus: {
      sql: `marital_status`,
      type: `string`
    },
    
    profession: {
      sql: `profession`,
      type: `string`
    },
    
    comments: {
      sql: `comments`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    birthday: {
      sql: `birthday`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  }
});
