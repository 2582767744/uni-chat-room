/**
 * 截取聊天室示例截图
 */
const { createBrowser, login } = require('I:/sys_att_uniapp/tests/e2e/common');

async function captureScreenshots() {
  console.log('========== 截取示例截图 ==========\n');
  
  const { browser, page } = await createBrowser();
  
  // 设置移动端视口
  await page.setViewportSize({ width: 375, height: 812 });
  
  try {
    await login(page);
    
    // 进入私聊页面
    console.log('[截图] 进入私聊页面');
    await page.goto('http://localhost:5173/#/pages/Message/PrivateChat?sessionId=9');
    await page.waitForTimeout(3000);
    
    // 截图1: 聊天界面
    await page.screenshot({ 
      path: 'I:/uni-chat-room/docs/images/chat-demo.png',
      fullPage: false
    });
    console.log('[截图] chat-demo.png');
    
    // 打开表情面板
    const emojiBtn = page.locator('[aria-label="表情"]').first();
    await emojiBtn.waitFor({ state: 'visible', timeout: 5000 });
    await emojiBtn.click();
    await page.waitForTimeout(1000);
    
    // 截图2: 表情面板
    await page.screenshot({ 
      path: 'I:/uni-chat-room/docs/images/emoji-panel.png',
      fullPage: false
    });
    console.log('[截图] emoji-panel.png');
    
    // 输入表情
    const emojis = await page.locator('.emoji-item img, .emoji-grid img').all();
    if (emojis.length > 1) {
      await emojis[0].click();
      await page.waitForTimeout(500);
      
      // 重新打开表情面板
      await emojiBtn.click();
      await page.waitForTimeout(800);
      const emojis2 = await page.locator('.emoji-item img, .emoji-grid img').all();
      if (emojis2.length > 1) {
        await emojis2[1].click();
        await page.waitForTimeout(500);
      }
    }
    
    // 输入文字
    const editor = page.locator('#emoji-editor .ql-editor');
    await editor.click();
    await page.keyboard.type(' Hello World!');
    await page.waitForTimeout(500);
    
    // 截图3: 输入状态
    await page.screenshot({ 
      path: 'I:/uni-chat-room/docs/images/input-demo.png',
      fullPage: false
    });
    console.log('[截图] input-demo.png');
    
    console.log('\n========== 截图完成 ==========');
    
  } catch (error) {
    console.error('[错误]', error.message);
  } finally {
    await page.waitForTimeout(2000);
    await browser.close();
  }
}

captureScreenshots();
