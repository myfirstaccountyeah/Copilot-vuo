import { defineRule, configure, Form, Field, ErrorMessage } from 'vee-validate';
import * as rules from '@vee-validate/rules';

// Define all rules
Object.keys(rules).forEach(rule => {
  defineRule(rule, rules[rule]);
});

// Configure Vee-Validate
configure({
  generateMessage: (ctx) => {
    const messages = {
      required: `${ctx.field} is required.`,
      email: `${ctx.field} must be a valid email.`,
      min: `${ctx.field} must be at least ${ctx.rule.params[0]} characters.`,
      // Add more custom messages as needed
    };

    return messages[ctx.rule.name] ? messages[ctx.rule.name] : `${ctx.field} is invalid.`;
  },
});

// Export components for use in the application
export { Form, Field, ErrorMessage };