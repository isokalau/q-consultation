---
sidebar_label: '🚀 Quick Start Guide'
sidebar_position: 2
---

import InstallPrerequisites from '/docs/snippets/installation-prerequisites.md'
import RunDev from '/docs/snippets/scripts/dev.md'
import ScriptConfig from '/docs/snippets/script-config.md'
import ScriptSchema from '/docs/snippets/script-schema.md'

# Quick Start Guide

**Q-Consultation Lite** offers a lot of flexibility. Whether you want to go fast and quickly see the final result, or would rather dive deeper into the product, we got you covered. For this tutorial, we'll go for the DIY approach and build a project and data structure from scratch.

:::tip Prerequisites
<InstallPrerequisites components={props.components} />
:::

:::info Video Demo
If demos are more your thing, we have a video demo:

<div style={{ textAlign: 'center' }}>
  <iframe
    allowFullScreen
    frameBorder="0"
    title="YouTube video player"
    src="https://www.youtube.com/embed/-nEoba8vq_I"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    style={{ height: '315px', width: '100%', maxWidth: '560px' }}
  />
</div>
:::

## Step 1: Install dependencies

You will need to clone the repository or download it as a zip archive. Once you have cloned/dowloaded this repo you need to install dependencies running the following command in a terminal:

<Tabs groupId="yarn-npm">

<TabItem value="npm" label="npm">

```bash
npm install
```

</TabItem>

<TabItem value="yarn" label="yarn">

```bash
yarn
```

</TabItem>

</Tabs>

## Step 2: Register QuickBlox account

Next, you need to have a QuickBlox account. You can sign up here: https://admin.quickblox.com/signup. Feel free to skip this step in case you already have an account.

## Step 3: Create QuickBlox application

After registering the QuickBlox account, you need to create an application in your QuickBlox admin panel that will allow you to connect the Q-Consultation Lite app to the QuickBlox server. Follow the steps below:

1. Log into QuickBlox account (if you are not yet there) <https://admin.quickblox.com/signin>.
2. On the main page, click + sign to add a new application.
3. Fill in the required fields: **App title** and **App type**, and create app.

Once done, you will be redirected to the **Overview** page of your newly created application. There, you will find application credentials necessary to connect Q-Consultation application to the QuickBlox server. We will get back to them later.

![](/img/quick-start/001.png)
![](/img/quick-start/002.png)
![](/img/quick-start/003.png)

> You can read more about working with applications here: <https://docs.quickblox.com/docs/application>

## Step 4: Configure application

Now, let’s get back to the application credentials which you saw in the QuickBlox admin panel.

<ScriptConfig components={props.components} />

:::tip
You can also manually add the config. Read more information in the [Configuration](/dev/setup-and-deployment/configurations#configure-application) section.
:::

## Step 5: Upload Schema

<ScriptSchema components={props.components} />

:::tip
You can also add a scheme manually. Read more information in the [Configuration](/dev/setup-and-deployment/configurations#upload-schema) section.
:::

## Step 6: Run application

<RunDev components={props.components} />

## ⏩ What to do next?

After you complete the step with running the project in develop mode, Client and Provider apps should be automatically open in your default browser. Now, your Q-Consultation app is ready to be used for your goals.

How to proceed with app integration, you can find detailed instructions here: ​[Development](/dev/development).
