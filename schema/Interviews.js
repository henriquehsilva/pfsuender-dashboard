cube(`Interviews`, {
  sql: `SELECT * FROM public.interviews`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    origin: {
      sql: `origin`,
      type: `string`
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    requestIn: {
      sql: `request_in`,
      type: `time`
    }
  }
});
