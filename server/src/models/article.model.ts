"use strict";
import { ArticleAttributes } from "modules/article/types/article.model.types";
import * as Sequelize from "sequelize";
import { Model, UUIDV4 } from "sequelize";

export interface IArticleInstance extends ArticleAttributes { }

module.exports = (sequelize: any, DataTypes: any) => {
	class Article
		extends Model<ArticleAttributes>
		implements ArticleAttributes {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		title!: string;
		text!: string;
		type!: string;
		static associate(models: any) {
			// define association here
			Article.belongsTo(models.User);
		}
	}
	Article.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			text: {
				type: DataTypes.STRING(500),
			},
		},
		{
			sequelize,
			modelName: "Article",
		}
	);
	return Article;
};