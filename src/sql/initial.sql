CREATE EXTENSION IF NOT EXISTS "uuid_ossp";

CREATE TABLE IF NOT EXISTS contact( 
    ct_id uuid DEFAULT uuid_generate_v4(), 
    ct_name VARCHAR(400) NOT NULL,
    ct_phone VARCHAR NOT NULL,
    ct_email VARCHAR(300) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ct_id)
    );


-- CREATE TABLE IF NOT EXISTS contact( 
--     ct_id uuid DEFAULT uuid_generate_v4(), 
--     ct_name VARCHAR(400) NOT NULL,
--     ct_phone VARCHAR NOT NULL,
--     ct_email VARCHAR(300) NOT NULL,
--     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     updated_at DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
--     PRIMARY KEY (ct_id)
--     );