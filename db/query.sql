-- USE hospital_db;

select b.id, Concat(p.first_name, ' ', p.last_name) as 'Patient Name', p.date_admitted, p.date_discharge, Concat(d.first_name, ' ', d.last_name) as 'Doctor Name', m.condition
from (((Patient p
left join bed b on p.bed_id = b.id)
left join doctor d on p.doctor_id = d.id)
left join medical_record m on m.patient_id = p.id)
where b.id IS NOT NULL
order by b.id;