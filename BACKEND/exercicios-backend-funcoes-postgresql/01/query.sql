--1)
select count(*) from farmacia;

--2)
select min(idade) from usuarios;

--3)
select max(idade) from usuarios;

--4)
select round(avg(idade)) from usuarios where idade >= 18;

--5)
select sum(estoque) from farmacia where categoria = 'blue' or categoria = 'black';

--6)
select categoria,sum(estoque) from farmacia where categoria is not null group by categoria;

--7)
select sum(estoque) from farmacia where medicamento is null;

--8)
select count(medicamento) from farmacia where categoria is null;

--9)
select concat(medicamento, '(',categoria, ')') from farmacia where categoria is not null;

--10)
select concat(id, ' - ', medicamento, '(', coalesce(categoria,'sem categoria'), ')') from farmacia;

--11)
select nome,idade,cast(cadastro as date) from usuarios where cast(cadastro as date) between cast('2020-01-01' as date) and cast('2020-12-31' as date);

--12)
select nome,idade,email,age(cast(cadastro as timestamp)) from usuarios where idade < 18;

--13)
select nome,idade,email,age(cast(cadastro as date)) from usuarios where idade >= 60;

--14)
select categoria,count(id) from farmacia where categoria is not null group by categoria;

--15)
select idade,count(id) from usuarios where idade >= 18 group by idade;

--16)
select categoria,sum(estoque) from farmacia group by categoria;