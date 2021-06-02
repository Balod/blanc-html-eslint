/**
 * @typedef {import("../types").Rule} Rule
 */
 const { NodeUtils } = require("./utils");

 const MESSAGE_IDS = {
  UNEXPECTED: "unexpected",
};

 /**
  * @type {Rule}
  */

  module.exports = {
    meta: {
      type: "code",

      docs: {
        description: "Class names order in HTML",
        category: "Style",
        recommended: true,
      },

      fixable: 'code',
      schema: [],
      messages: {
        [MESSAGE_IDS.UNEXPECTED]: 'Invalid class names order'
      },
    },

    create(context) {
      return {
        "*"(node) {
            const classAttr = NodeUtils.findAttr(node, "class");

            if (classAttr) {
              context.report({
                node: classAttr,
                messageId: MESSAGE_IDS.UNEXPECTED,
              });
            }
        }
      };
    },
  };