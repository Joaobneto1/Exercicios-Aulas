create database ecommerce;

create table categorias (
  id serial primary key,
  nome varchar(50) not null);

create table produtos (
  id serial primary key,
  nome varchar(100) not null,
  descricao text not null,
  preco integer not null,
  quantidade_em_estoque integer not null,
  categoria_id integer references categorias(id));

create table itens_do_pedido (
  id serial primary key,
  pedido_id integer references pedidos(id),
  quantidade integer not null,
  produto_id integer references produtos(id)
);

create table pedidos (
  id serial primary key,
  valor integer not null,
  cliente_cpf char(11) references clientes(cpf),
  vendedor_cpf char(11) references vendedores(cpf)
);

create table clientes (
  cpf char(11) not null unique,
  nome varchar(150) not null
);

create table vendedores (
  cpf char(11) not null unique,
  nome char(150) not null
);

-- 1
insert into categorias (nome) 
values ('frutas'),('verduras'),('massas'),('bebidas'),('utilidades');

--2
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id) 
values 
('Mamão', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras.', 90, 34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 1),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

--3
insert into clientes(cpf,nome)
values ('80371350042', 'José Augusto Silva'),
('67642869061', 'Antonio Oliveira'),
('63193310034', 'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');

--4 
insert into vendedores(cpf,nome)
values ('82539841031', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

--5 a)
INSERT INTO pedidos 
(valor, cliente_cpf, vendedor_cpf)
VALUES 
(300, '80371350042', '28007155023'), --mamão
(700, '80371350042', '28007155023'), --pepsi 2L
(1200, '80371350042', '28007155023'), --heineken 600ml
(1000, '80371350042', '28007155023'), --escova dental
(90, '80371350042', '28007155023'); --maçãs

INSERT INTO itens_do_pedido
 (pedido_id, quantidade, produto_id)
VALUES 
 (1, 1, 1),
 (2, 1, 10),
 (3, 6, 11),
 (4, 1, 15),
 (5, 5, 2);

--5 b)
INSERT INTO pedidos 
(valor, cliente_cpf, vendedor_cpf)
VALUES 
(198, '63193310034', '23262546003'), --Mangas
(420, '63193310034', '23262546003'), --Uvas
(300, '63193310034', '23262546003'), --Mamões
(125, '63193310034', '23262546003'), --tomates
(235, '63193310034', '23262546003'); --Acelgas

INSERT INTO itens_do_pedido
 (pedido_id, quantidade, produto_id)
VALUES 
 (6, 10, 17),
 (7, 3, 18),
 (8, 5, 1),
 (9, 10, 5),
 (10, 2, 6);

--5 c)
INSERT INTO pedidos 
(valor, cliente_cpf, vendedor_cpf)
VALUES 
(2350, '75670505018', '23262546003'), --Vassoura
(130, '75670505018', '23262546003'), --Águas sem gás
(198, '75670505018', '23262546003'); --Mangas

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES 
 (11, 1, 13),
 (12, 6, 12),
 (13, 5, 17);

--5 d)
INSERT INTO pedidos 
(valor, cliente_cpf, vendedor_cpf)
VALUES 
(2290, '75670505018', '82539841031'), --Balde para lixo
(420, '75670505018', '82539841031'), --Uvas
(690, '75670505018', '82539841031'), --Macarrão parafuso
(300, '75670505018', '82539841031'), --Mamões
(125, '75670505018', '82539841031'), --tomates
(235, '75670505018', '82539841031'); --Acelgas

INSERT INTO itens_do_pedido
 (pedido_id, quantidade, produto_id)
VALUES 
 (14, 1, 16),
 (15, 6, 18),
 (16, 1, 7),
 (17, 3, 1),
 (18, 20, 5),
 (19, 2, 6);

--5 e)
INSERT INTO pedidos 
(valor, cliente_cpf, vendedor_cpf)
VALUES 
(420, '67642869061', '82539841031'), --Uvas
(875, '67642869061', '82539841031'), --Massa para lasanha
(198, '67642869061', '82539841031'), --Mangas
(125, '67642869061', '82539841031'), --tomates
(1200, '67642869061', '82539841031'); --Heinekens 600ml

INSERT INTO itens_do_pedido
 (pedido_id, quantidade, produto_id)
VALUES 
 (20, 8, 18),
 (21, 1, 8),
 (22, 3, 17),
 (23, 8, 5),
 (24, 2, 11);
