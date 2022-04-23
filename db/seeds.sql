/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : seeds.sql        */
/* Author   : Vicente Garcia   */
/* Date     : 04/20/2022       */
/* Modified : 04/21/2022       */
/* --------------------------- */
-- Delete data tables
DELETE FROM employees;
DELETE FROM roles;
DELETE FROM departments;
-- Insert data in departaments table
INSERT
  INTO departments (name)
VALUES ("Human Resources")  -- 1
      ,("Administration")   -- 2
      ,("Customer Service") -- 3
      ,("Finance");         -- 4
-- Insert data in roles table
INSERT
  INTO roles (title, salary, department_id)
VALUES ("Personal manager"            , 110000.09, 1)  -- 1  Human Resources
      ,("Comunication"                , 150100.00, 2)  -- 2  Administration
      ,("Executive assistant"         , 72900.01 , 2)  -- 3  Administration
      ,("Manager"                     , 87599.12 , 3)  -- 4  Customer Service
      ,("Accounting assistant"        , 42050.50 , 4)  -- 5  Finance
      ,("Front desk attendant"        , 25000.00 , 2)  -- 6  Administration
      ,("Recruiter"                   , 42399.10 , 1)  -- 7  Human Resources
      ,("Finance manager"             , 99000.99 , 4)  -- 8  Finance
      ,("Talent acquisition assistant", 32000.00 , 1)  -- 9  Human Resources
      ,("Supervisor"                  , 68799.99 , 3)  -- 10 Customer Service
      ,("Agent"                       , 59870.00 , 3)  -- 11 Customer Service
      ,("General accounting"          , 87060.15 , 4); -- 12 Finance
-- Insert data in employees table
INSERT
  INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Robert" , "Smith"   , 1  , null) -- 1  Personal manager
      ,("Sara"   , "Hamilton", 7  , 1)    -- 2  Recruiter
      ,("William", "Hardin"  , 9  , 2)    -- 3  Talent acquisition assistant
      ,("David"  , "Payne"   , 2  , null) -- 4  Comunication
      ,("Nicole" , "Spires"  , 3  , 4)    -- 5  Executive assistant
      ,("Max"    , "Sears"   , 6  , 5)    -- 6  Front desk attendant
      ,("Richard", "James"   , 4  , null) -- 7  Manager
      ,("Edward" , "Harris"  , 10 , 7)    -- 8  Supervisor
      ,("Natalia", "Montana" , 11 , 8)    -- 9  Agent
      ,("Mike"   , "Kent"    , 8  , null) -- 10 Finance manager
      ,("Monica" , "Long"    , 12 , 10)   -- 11 General accounting
      ,("Andrew" , "Berti"   , 5  , 11)   -- 12 Accounting assistant
      ,("Louis"  , "Fleming" , 11 , 8)    -- 13 Agent
      ,("Megan"  , "Rice"    , 7  , 1);   -- 14 Recruiter