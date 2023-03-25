INSERT INTO User (id, email,password,type)
VALUES (001,"sjc@gmail.com","1234","doctor" ),
       (002,"kmp@gmail.com","4567","doctor" ),
       (003,"ikp@gmail.com","1212","doctor" ),
       (004,"hcp@gmail.com","2343","doctor" ),
       (005,"gls@gmail.com","2245","doctor" ),
       (006,"lso@gmail.com","7645","doctor" ),
       (007,"odd@gmail.com","6732","doctor" ),
       (008,"jgp@gmail.com","5632","doctor" ),
       (009,"bjc@gmail.com","3435","doctor" ),
       (010,"jrg@gmail.com","6762","doctor" );
       (011,"ks1@gmail.com","9842","patient" ),
       (012,"jt2@gmail.com","2342","patient" ),
       (013,"vb3@gmail.com","3423","patient" ),
       (014,"tm4@gmail.com","7545","patient" ),
       (015,"ct3@gmail.com","7799","patient" ),
       (016,"mw1@gmail.com","2283","patient" ),
       (017,"jm2@gmail.com","6823","patient" ),
       (018,"jb0@gmail.com","9934","patient" ),
       (019,"jro@gmail.com","6683","patient" ),
       (020,"pj6@gmail.com","4532","patient" );


INSERT INTO Doctors (id, first_name, last_name,speciality,user_id)
VALUES (041,"Stewart","Johnson","cardiotherapy","001" ),
       (042,"Krystal","Meyers","phsiotherapy","002" ),
       (043,"Ian","Kelly","pediatrician","003" ),
       (044,"Harry","Cornish","psychiatry","004" ),
       (045,"Gabrielle","Lambert","surgery","005" ),
       (046,"Leah","Simpson","occupational therapy","006" ),
       (047,"Oliver","Duncan","Dentistry","007" ),
       (048,"Joseph","Gibson","podiatrist","008" ),
       (049,"Brandon","James","Cardiotherapy","009" ),
       (050,"Jessica","Ross","general practice","010" );
       
INSERT INTO Patient (id, first_name, last_name,postcode,phone,user_id,doctor_id)
VALUES (051,"Karen","Sharp","5061","0412345678","011","041" ),
       (052,"Joshua","Turner","5012","0412121223","012","042"),
       (053,"Victor","Bond","5023","0412332454","013","043" ),
       (054,"Thomas","Marshall","5014","0412376598","014","044"),
       (055,"Colin","Taylor","5023","0412365975","015","045"),
       (056,"Max","Watson","5031","0412716280","016","046" ),
       (057,"Jake","Miller","5032","0417391739","017","047" ),
       (058,"Jennifer","Bower","5070","0428893173","018","048" ),
       (059,"Jack","Robertson","5060","0428193028","019","049" ),
       (060,"Piers","Johnston","5046","0427183920","020","050" );
       
INSERT INTO Staff (id, first_name, last_name,user_id)
VALUES (061,"Max","Bond","021" ),
       (062,"Sue","McLean","022"),
       (063,"Keith","Johnston","023" ),
       (064,"Trevor","Springer","024"),
       (065,"Rose","Forsyth","025"),
       (066,"Kevin","Ellison","026" ),
       (067,"Blake","Rampling","027" ),
       (068,"Richard","Knox","028"),
       (069,"Melanie","Newman","029" ),
       (070,"Karen","Hudson","030" );
INSERT INTO MedicalRecord (id,condition,patient_id)
VALUES (051,"cancer","051" ),
       (051,"flu","052" ),
       (051,"dehuydration","053" ),
       (051,"melanoma","054" ),
       (051,"covid","055" ),
       (051,"mental health","056" ),
       (051,"athletes foot","057" ),
       (051,"asthma","058" ),
       (051,"toothache","059" ),
       (051,"athritis","060" );
       
       