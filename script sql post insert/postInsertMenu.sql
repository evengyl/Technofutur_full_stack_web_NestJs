USE demo_fs_web_nestjs;


GO

TRUNCATE TABLE dbo.menu;

GO

INSERT INTO dbo.menu
(pageName, type, name, price)
VALUES
('Apéros', 'Alcoolisé', 'Apérol', 7),
('Apéros', 'Non-Alcoolisé', 'Pisang', 5),
('Apéros', 'Alcoolisé', 'Jupiler', 2),
('Apéros', 'Alcoolisé', 'Maison', 6),
('Plats Principale', 'Carnos', 'Steak 500 gr', 28.99),
('Plats Principale', 'Carnos', 'Hamburger Maison', 16),
('Plats Principale', 'Végétarien', 'Oeufs cuit dur', 8.25),
('Plats Principale', 'Végétarien', 'Tarine au fromage de moine', 11.20),
('Entrées', 'Carnos', 'Croquette Crevette', 1.99),
('Entrées', 'Carnos', 'Paté maison', 8.41),
('Entrées', 'Végétarien', 'Croquette fromage', 5.99),
('Entrées', 'Végétalien', 'Croquette de salade', 12.40),
('Dessert', 'Tout', 'Moelleux chocolat', 7),
('Dessert', 'Tout', 'Tarte Pomme', 5.6),
('Dessert', 'Tout', 'Crème glacée', 3.8),
('Dessert', 'Végétalien', 'Fruits sec sans gout', 0.2),
('Digestifs', 'Alcoolisé', 'Rhum Vanillé', 6.5),
('Digestifs', 'Alcoolisé', 'Wishky', 6),
('Digestifs', 'Alcoolisé', 'Limoncelo', 4),
('Digestifs', 'Alcoolisé', 'Eau pur d\''usine nucléaire', 1.5);


